import React, { useContext, useEffect, useState } from "react";
import { Bounce, Fade } from "react-awesome-reveal";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

const MyRecipes = () => {
  const { user } = useContext(AuthContext);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    const fetchRecipes = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/my-recipes?email=${user.email}`
        );
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setRecipes(data);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to load your recipes!",
          error,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [user]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-dots loading-sm"></span>
      </div>
    );
  }

  if (recipes.length === 0) {
    return (
      <Bounce cascade damping={0.1}>
        <div className="flex flex-col items-center text-center text-red-500">
          <img
            src="https://cdn-icons-png.flaticon.com/512/706/706164.png"
            alt="Empty Plate"
            className="w-20 h-20 mb-4 animate-pulse"
          />
          <p className="text-xl font-semibold">
            You haven't added any recipes yet!
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Please add some delicious recipes 🍽️
          </p>
        </div>
      </Bounce>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-12 text-center my-12 text-lime-600 ">
        My Recipeies
      </h2>

      <Fade cascade damping={0.1} triggerOnce>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {recipes.map((recipe) => (
            <div
              key={recipe._id}
              className="card bg-base-100 shadow-md cursor-pointer hover:scale-105 hover:shadow-lg transition-transform duration-300"
            >
              <figure>
                <img
                  src={recipe.image || "https://via.placeholder.com/300x200"}
                  alt={recipe.title}
                  className="h-48 w-full object-cover rounded-t"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">{recipe.title}</h3>
                <p className="text-sm text-gray-600">
                  <strong>Cuisine:</strong> {recipe.cuisineType}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Prep Time:</strong> {recipe.prepTime} mins
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Likes:</strong> {recipe.likeCount || 0}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default MyRecipes;
