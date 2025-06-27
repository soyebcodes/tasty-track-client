import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Overview = () => {
  const [recipes, setRecipes] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://savor-book-server.onrender.com/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const total = recipes.length;
  const myRecipesList = recipes.filter((r) => r.email === user?.email);
  const myRecipes = myRecipesList.length;

  const totalLikes = myRecipesList.reduce(
    (acc, recipe) => acc + (recipe.likes || 0),
    0
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-base-100 p-6 rounded shadow">
          <h3 className="text-lg font-semibold">Total Recipes</h3>
          <p className="text-3xl font-bold text-orange-500">{total}</p>
        </div>

        <div className="bg-base-100 p-6 rounded shadow">
          <h3 className="text-lg font-semibold">My Recipes</h3>
          <p className="text-3xl font-bold text-lime-500">{myRecipes}</p>
        </div>

        <div className="bg-base-100 p-6 rounded shadow">
          <h3 className="text-lg font-semibold">Total Likes (My Recipes)</h3>
          <p className="text-3xl font-bold text-pink-500">{totalLikes}</p>
        </div>

        <div className="bg-base-100 p-6 rounded shadow col-span-full md:col-span-2 lg:col-span-1">
          <h3 className="text-lg font-semibold">Logged in as</h3>
          <p className="text-md text-gray-700">{user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
