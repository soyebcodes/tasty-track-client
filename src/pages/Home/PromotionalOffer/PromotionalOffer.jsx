import React from "react";
import { Fade } from "react-awesome-reveal";
import { FaUtensils, FaPercent } from "react-icons/fa";
import { useNavigate } from "react-router";

const PromotionalOffer = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-yellow-100 dark:bg-yellow-900 py-12 mt-20">
      <div className="w-11/12 mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-10">
        <Fade direction="left" triggerOnce>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-700 dark:text-yellow-200 mb-4 flex items-center gap-2">
              <FaPercent className="text-4xl text-amber-500" /> Special Offer!
            </h2>
            <p className="text-gray-800 dark:text-yellow-100 text-lg mb-6">
              Share 3 or more recipes and get featured on our homepage! Plus,
              win exclusive kitchen gear & goodies 🎁.
            </p>
            <button
              className="btn btn-warning text-white shadow hover:scale-105 transition-transform"
              onClick={() => navigate("/add-recipe")}
            >
              <FaUtensils className="mr-2" /> Share Now
            </button>
          </div>
        </Fade>

        <Fade direction="right" triggerOnce>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/857/857681.png"
              alt="Promo Dish"
              className="w-72 h-auto animate-pulse"
            />
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default PromotionalOffer;
