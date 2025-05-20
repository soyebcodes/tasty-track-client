import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const AllRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">All Recipes</h2>

      {recipes.length === 0 ? (
        <p className="text-center text-gray-500">No recipes found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
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
                  PRep Time: {recipe.prepTime} mins
                </p>

                <div className="card-actions justify-end mt-2">
                  <Link
                    to={`/recipes/${recipe.id}`}
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
