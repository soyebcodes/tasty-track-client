import React, { useEffect, useState } from "react";

import { Bounce } from "react-awesome-reveal";
import RecipeCard from "./RecipeCard";

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [cuisine, setCuisine] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    fetch("https://savor-book-server.onrender.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
        setFiltered(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching recipes:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    updateFilteredList();
  }, [cuisine, sortOrder, recipes]);

  const updateFilteredList = () => {
    let filteredList = [...recipes];

    // Filter by cuisine
    if (cuisine) {
      filteredList = filteredList.filter(
        (recipe) => recipe.cuisineType === cuisine
      );
    }

    // Sort selection
    if (sortOrder === "title-asc") {
      filteredList.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === "title-desc") {
      filteredList.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortOrder === "prep-asc") {
      filteredList.sort((a, b) => a.prepTime - b.prepTime);
    } else if (sortOrder === "prep-desc") {
      filteredList.sort((a, b) => b.prepTime - a.prepTime);
    }

    setFiltered(filteredList);
  };

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentRecipes = filtered.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 my-8">
      <h2 className="text-3xl font-bold text-center mb-6">All Recipes</h2>

      {/* Filter and sorting */}
      <div className="mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Filter */}
        <select
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
          className="select select-bordered w-full md:w-64"
        >
          <option value="">Filter by Cuisine Type</option>
          <option value="Italian">Italian</option>
          <option value="Mexican">Mexican</option>
          <option value="Bangladeshi">Bangladeshi</option>
          <option value="Chinese">Chinese</option>
          <option value="Others">Others</option>
        </select>

        {/* Sorting */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="select select-bordered w-full md:w-64"
        >
          <option value="">Sort By</option>
          <option value="title-asc">Title: A to Z</option>
          <option value="title-desc">Title: Z to A</option>
          <option value="prep-asc">Prep Time: Low to High</option>
          <option value="prep-desc">Prep Time: High to Low</option>
        </select>
      </div>

      {loading ? (
        <div className="text-center py-20">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      ) : filtered.length === 0 ? (
        // error recipe not found
        <Bounce cascade damping={0.1}>
          <div className="flex flex-col items-center text-center text-red-500">
            <img
              src="https://cdn-icons-png.flaticon.com/512/706/706164.png"
              alt="Empty Plate"
              className="w-20 h-20 mb-4 animate-pulse"
            />
            <p className="text-xl font-semibold">
              No recipes found for the selected criteria!
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Try a different filter or add a new recipe 🍽️
            </p>
          </div>
        </Bounce>
      ) : (
        <>
          {/*  recipe card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentRecipes.map((recipe) => (
              <RecipeCard key={recipe._id} recipe={recipe} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-10">
            <div className="join">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="join-item btn btn-sm"
              >
                «
              </button>

              {[...Array(totalPages).keys()].map((num) => (
                <button
                  key={num}
                  onClick={() => handlePageChange(num + 1)}
                  className={`join-item btn btn-sm ${
                    currentPage === num + 1 ? "btn-primary" : ""
                  }`}
                >
                  {num + 1}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="join-item btn btn-sm"
              >
                »
              </button>
            </div>
          </div>
        </>

        // Pagination
      )}
    </div>
  );
};

export default AllRecipes;
