import React from "react";
import { Link } from "react-router";

const RecipeCard = ({ recipe }) => {
  return (
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
        <p className="text-sm text-gray-600">Cuisine: {recipe.cuisineType}</p>
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
  );
};

export default RecipeCard;
