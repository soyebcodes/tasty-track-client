import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter a valid email!");
    alert(`Subscribed: ${email}`);
    setEmail("");
  };

  return (
    <section className="bg-orange-50 dark:bg-gray-800 py-16 mt-20">
      <div className="w-11/12 mx-auto text-center max-w-3xl">
        <h2 className="text-3xl font-bold text-orange-600 mb-4">
          📬 Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Get the latest recipes, cooking tips, and food trends delivered to
          your inbox!
        </p>
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
          <button type="submit" className="btn btn-primary">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
