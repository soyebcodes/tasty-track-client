import React from "react";

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8 text-orange-600">
        Contact Us
      </h1>
      <p className="text-lg text-gray-700 mb-6 text-center">
        We'd love to hear from you! Whether you have questions, feedback, or
        just want to say hello — feel free to reach out.
      </p>

      <form className="space-y-6 bg-base-100 p-8 shadow-lg rounded">
        <div>
          <label className="label font-semibold">Your Name</label>
          <input
            type="text"
            placeholder="John Doe"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="label font-semibold">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="label font-semibold">Message</label>
          <textarea
            rows="4"
            placeholder="Write your message here..."
            className="textarea textarea-bordered w-full"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
