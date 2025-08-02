import React from "react";

const Blog = () => {
  const posts = [
    {
      title: "Understanding Symptom-Based AI Diagnosis",
      date: "August 2, 2025",
      summary:
        "Explore how HealthWiser uses advanced machine learning to analyze your symptoms and provide safe, personalized medical predictions within seconds.",
      link: "#",
    },
    {
      title: "Top 5 Precautions for Common Seasonal Illnesses",
      date: "July 28, 2025",
      summary:
        "Practical, doctor-approved precautions you can adopt to stay healthy throughout the changing seasons and boost your immunity naturally.",
      link: "#",
    },
    {
      title: "Why Nutrition Matters for Recovery",
      date: "July 15, 2025",
      summary:
        "Discover how a balanced diet accelerates recovery and supports your immune system, with easy meal ideas you can add to your daily routine.",
      link: "#",
    },
    {
      title: "Behind the Scenes: Building HealthWiser",
      date: "July 1, 2025",
      summary:
        "Take a look behind the curtain at how HealthWiser’s AI models, clean UX design, and reliable health database come together to help you stay informed.",
      link: "#",
    },
  ];

  const featuredPost = posts[0];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-primary">
          HealthWiser Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Stay informed with practical health tips, AI insights, and a behind-the-scenes look at how HealthWiser is transforming personal healthcare.
        </p>
      </div>

      {/* Featured Post */}
      <div className="mb-20">
        <div className="bg-green-50 rounded-lg shadow-md p-8 md:flex md:items-center md:gap-12">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-2 text-primary">
              Featured: {featuredPost.title}
            </h2>
            <p className="text-gray-500 text-sm mb-4">{featuredPost.date}</p>
            <p className="text-lg text-gray-700 mb-4">{featuredPost.summary}</p>
            <a
              href={featuredPost.link}
              className="inline-block bg-green-600 text-white px-5 py-3 rounded hover:bg-green-700 transition"
            >
              Read More
            </a>
          </div>
        </div>
      </div>

      {/* Remaining Posts */}
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.slice(1).map((post, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-between transition transform hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-primary">{post.title}</h3>
              <p className="text-gray-500 text-sm mb-3">{post.date}</p>
              <p className="text-gray-700 mb-4">{post.summary}</p>
            </div>
            <div className="px-6 pb-6">
              <a
                href={post.link}
                className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 text-center">
        <h3 className="text-2xl font-bold mb-4">Got a topic you want us to cover?</h3>
        <p className="text-lg text-gray-600 mb-6">
          We’re always looking to share what matters most to you. Send us your suggestions and help shape the HealthWiser Blog!
        </p>
        <a
          href="#contact"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Blog;
