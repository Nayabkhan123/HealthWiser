import React from "react";

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-primary">
        Get in Touch
      </h1>

      <p className="text-lg mb-6 text-gray-700 text-center">
        We’d love to hear from you! Whether you have questions, suggestions, or just want to say hello —
        <strong> HealthWiser</strong> is always here to listen.
      </p>

      <div className="bg-gray-50 rounded-lg p-6 mb-12 shadow-sm">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Contact Details</h2>
        <p className="text-lg mb-2 text-gray-700">
          📧 <strong>Email:</strong>{" "}
          <a
            href="mailto:support@healthwiser.ai"
            className="text-green-600 underline"
          >
            support@healthwiser.ai
          </a>
        </p>
        <p className="text-lg mb-2 text-gray-700">
          📞 <strong>Phone:</strong> +91 83036 16366
        </p>
        <p className="text-lg text-gray-700">
          🏢 <strong>Address:</strong> HealthWiser HQ, New Delhi, India
        </p>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-primary">
          Send Us a Message
        </h2>
        <p className="text-lg mb-6 text-gray-700">
          Fill out the form below — our team will get back to you within 1–2 business days.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block mb-2 font-medium text-gray-800">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Jane Doe"
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-800">
              Your Email
            </label>
            <input
              type="email"
              placeholder="jane@example.com"
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-800">
              Your Message
            </label>
            <textarea
              placeholder="How can we help you?"
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              rows="5"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className=" text-green-700 ring-2 ring-green-700 px-8 py-3 rounded shadow hover:bg-green-700 hover:text-white transition-colors duration-200"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-green-600">
          Quick Response Promise
        </h2>
        <p className="text-lg text-gray-700 mb-2">
          We respond to all queries promptly. For urgent issues, please add <strong>“URGENT”</strong> to your subject line or call us directly.
        </p>
        <p className="text-lg text-gray-700">
          Thank you for trusting <strong>HealthWiser</strong> — we’re here to make healthcare smarter, together.
        </p>
      </div>
    </div>
  );
};

export default Contact;
