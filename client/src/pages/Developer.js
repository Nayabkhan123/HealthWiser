import React from "react";

const Developer = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-primary">
        Meet the Developer
      </h1>

      <p className="text-lg text-gray-700 mb-10 text-center">
        <strong>HealthWiser</strong> is crafted by a passionate developer who believes in using AI to make personal healthcare smarter and more accessible for everyone.
      </p>

      <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
        <div className="flex-1 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-primary">👤 Developer Profile</h2>
          <p className="text-lg text-gray-700 mb-3">
            <strong>Name:</strong> Nayab Khan <br />
            <strong>Role:</strong> Full-Stack Developer | AI Enthusiast <br />
            <strong>Education:</strong> B.Tech, Jamia <br />
            <strong>Email:</strong>{" "}
            <a
              href="mailto:nayab16366@gmail.com"
              className="text-green-600 underline"
            >
              nayab16366@gmail.com
            </a>
          </p>
          <p className="text-lg text-gray-700">
            I’m dedicated to creating real-world solutions that merge advanced AI with intuitive, scalable web experiences.
            HealthWiser represents my vision to deliver reliable health insights through clean design and smart technology.
          </p>
        </div>

        <div className="flex-1 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-primary">🛠️ Technologies Used</h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-1">
            <li>Python (Machine Learning, Scikit-Learn, Flask)</li>
            <li>JavaScript (React.js, Node.js, Express.js)</li>
            <li>HTML5, CSS3, Tailwind CSS</li>
            <li>Axios for API integration</li>
            <li>MongoDB / any NoSQL DB</li>
            <li>Version Control: Git & GitHub</li>
            <li>Deployment: Vercel / Netlify / Render</li>
          </ul>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-12">
        <h2 className="text-2xl font-bold mb-4 text-primary">🚀 Vision & Motivation</h2>
        <p className="text-lg text-gray-700 mb-3">
          I believe technology should solve meaningful everyday problems. With <strong>HealthWiser</strong>,
          my goal was to empower people to get instant, trustworthy medical insights — cutting through the noise of unverified information online.
        </p>
        <p className="text-lg text-gray-700">
          I’m committed to improving HealthWiser — enhancing AI predictions, expanding the database, and adding features that truly make a difference in people’s lives.
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-primary">📬 Let’s Connect</h2>
        <p className="text-lg text-gray-700 mb-3">
          I love collaborating on impactful projects. Feel free to reach out — for ideas, suggestions, partnerships, or just a quick hello!
        </p>
        <div className="text-lg text-gray-700">
          📧{" "}
          <a
            href="mailto:nayab16366@gmail.com"
            className="text-green-600 underline"
          >
            nayab16366@gmail.com
          </a>{" "}
          <br />
          💼{" "}
          <a
            href="https://github.com/Nayabkhan123"
            className="text-green-600 underline"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a
            href="https://www.linkedin.com/in/nayab-khan-b424152a5"
            className="text-green-600 underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Developer;
