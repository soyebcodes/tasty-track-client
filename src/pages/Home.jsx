import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import { Link, useNavigate } from "react-router";
import { FaHeart } from "react-icons/fa";
import { Fade, Slide } from "react-awesome-reveal";

const Home = () => {
  const [topRecipes, setTopRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/top-recipes")
      .then((res) => res.json())
      .then((data) => setTopRecipes(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      {/* Banner */}
      <section className="w-11/12 my-4 mx-auto">
        <Banner />
      </section>

      {/* Top Recipes */}
      <div className="w-11/12 max-w-7xl mx-auto my-16">
        <h2 className="text-3xl font-bold text-center mb-10">Top Recipes</h2>
        <Fade cascade damping={0.1} triggerOnce>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {topRecipes.map((recipe) => (
              <div key={recipe._id} className="card bg-base-100 shadow-md">
                <figure>
                  <img
                    src={
                      recipe.image ||
                      "https://via.placeholder.com/400x250?text=No+Image"
                    }
                    alt={recipe.title}
                    className="w-full h-56 object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">{recipe.title}</h3>
                  <p className="text-sm text-gray-500">
                    Cuisine: {recipe.cuisineType}
                  </p>
                  <p className="text-sm flex items-center gap-3">
                    <FaHeart /> Likes: {recipe.likeCount}
                  </p>
                  <div className="card-actions mt-4 justify-end">
                    <Link
                      to={`/recipes/${recipe._id}`}
                      className="btn btn-sm btn-primary"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Fade>
        <div className="flex justify-center mt-8">
          <button
            onClick={() => navigate("/all-recipes")}
            className="btn btn-outline btn-secondary"
          >
            See All Recipes
          </button>
        </div>
      </div>
      {/* Cooking tipes */}
      <div className="bg-base-200 py-10">
        <Slide direction="left">
          <div className="w-11/12 mx-auto text-center">
            <h2 className="text-2xl font-semibold mb-4">
              🔥 Quick Cooking Tips
            </h2>
            <p className="text-gray-600">
              Use fresh ingredients, season generously, and never underestimate
              the power of herbs! A pinch of love goes a long way.
            </p>
          </div>
        </Slide>
      </div>
      {/* Newsletter */}
      <div className="py-14 bg-gradient-to-r from-yellow-100 to-pink-100">
        <Fade direction="up" triggerOnce>
          <div className="w-11/12 mx-auto text-center">
            <h2 className="text-2xl font-bold mb-3">
              📬 Join Our Foodie Newsletter
            </h2>
            <p className="mb-4">
              Stay updated with new recipes, food tips, and exclusive offers.
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full max-w-sm mb-3"
            />
            <br />
            <button className="btn btn-secondary">Subscribe</button>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Home;
