import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import { Link, useNavigate } from "react-router";
import { FaHeart } from "react-icons/fa";
import { Fade, Slide } from "react-awesome-reveal";

import TestimonialSection from "../Testimonial/TestimonialSection ";
import WhyChooseUs from "../WhyChoseUS/WhyChooseUs";
import Newsletter from "../NewsLetter/Newsletter";
import PromotionalOffer from "../PromotionalOffer/PromotionalOffer";

const Home = () => {
  const [topRecipes, setTopRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://savor-book-server.onrender.com/top-recipes")
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

      <div className="w-11/12 max-w-7xl mx-auto my-16">
        <h2 className="text-3xl font-extrabold text-center mb-12 text-amber-700">
          Top Recipes
        </h2>

        <Fade cascade damping={0.1} triggerOnce>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {topRecipes.map((recipe) => (
              <div
                key={recipe._id}
                className="card bg-base-100 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                onClick={() => navigate(`/recipes/${recipe._id}`)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" && navigate(`/recipes/${recipe._id}`)
                }
              >
                <figure>
                  <img
                    src={
                      recipe.image ||
                      "https://via.placeholder.com/400x250?text=No+Image"
                    }
                    alt={recipe.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                    loading="lazy"
                  />
                </figure>
                <div className="card-body p-4">
                  <h3 className="card-title text-lg font-semibold mb-2">
                    {recipe.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-medium">Cuisine:</span>{" "}
                    {recipe.cuisineType}
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-2">
                    <FaHeart className="text-red-500" aria-hidden="true" />
                    <span>{recipe.likeCount}</span>
                  </p>
                  <div className="card-actions mt-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/recipes/${recipe._id}`);
                      }}
                      className="btn btn-sm bg-amber-600 hover:bg-amber-700 text-white w-full"
                      aria-label={`View details of ${recipe.title}`}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Fade>

        <div className="flex justify-center mt-10">
          <button
            onClick={() => navigate("/all-recipes")}
            className="btn btn-outline btn-secondary px-6 py-2 text-lg hover:bg-amber-100 dark:hover:bg-amber-900"
          >
            See All Recipes
          </button>
        </div>
      </div>
      {/* Cooking inspiration */}
      <PromotionalOffer />
      <WhyChooseUs />
      {/* Newsletter */}
      <TestimonialSection />
      <Newsletter />
    </>
  );
};

export default Home;
