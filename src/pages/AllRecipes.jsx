import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { Bounce } from "react-awesome-reveal";

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [cuisine, setCuisine] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [loading, setLoading] = useState(true);

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
        // recipe card
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((recipe) => (
            <div key={recipe._id} className="card bg-base-100 shadow-md">
              <figure>
                <img
                  src={recipe.image || "https://via.placeholder.com/300x200"}
                  alt={recipe.title}
                  className="h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-lg">{recipe.title}</h3>
                <p className="text-sm text-gray-600">
                  Cuisine: {recipe.cuisineType}
                </p>
                <p className="text-sm text-gray-600">
                  Prep Time: {recipe.prepTime} mins
                </p>

                <div className="card-actions justify-end mt-2">
                  <Link
                    to={`/recipes/${recipe._id}`}
                    className="btn btn-sm btn-primary"
                  >
                    See Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllRecipes;
