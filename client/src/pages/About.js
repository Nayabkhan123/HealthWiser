import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-primary">
        Meet HealthWiser
      </h1>

      <p className="text-lg mb-6 text-gray-700">
        <strong>HealthWiser</strong> is your AI-powered personal health guide. 
        It helps you better understand your symptoms, suggests possible conditions, 
        and offers practical tips — all in one place.
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-4 text-primary">Our Mission</h2>
      <p className="text-lg mb-6 text-gray-700">
        We believe everyone deserves early, informed, and accessible health guidance.
        HealthWiser empowers you with smart, AI-driven insights to support your health journey —
        always to be used alongside professional medical care.
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-4 text-primary">How It Works</h2>
      <p className="text-lg mb-4 text-gray-700">
        Just enter your symptoms — our trained machine learning model analyzes them to predict
        the most likely condition using trusted medical datasets. You’ll get:
      </p>

      <ul className="list-disc list-inside text-lg mb-6 text-gray-700 space-y-2">
        <li>
          ✅ <strong>Precaution Tips:</strong> Practical steps to manage and ease your symptoms.
        </li>
        <li>
          ✅ <strong>Medication Suggestions:</strong> Common over-the-counter options 
          (always check with your doctor!).
        </li>
        <li>
          ✅ <strong>Workout Advice:</strong> Gentle exercises to support recovery.
        </li>
        <li>
          ✅ <strong>Diet Guidance:</strong> Foods that can boost immunity and healing.
        </li>
      </ul>

      <h2 className="text-3xl font-bold mt-12 mb-4 text-primary">
        Who Is HealthWiser For?
      </h2>
      <p className="text-lg mb-6 text-gray-700">
        Whether you have mild symptoms, want quick insights before a doctor visit,
        or simply wish to learn about your health, HealthWiser is here to guide you.
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-4 text-primary">A Friendly Reminder</h2>
      <p className="text-lg mb-6 text-gray-700">
        HealthWiser does not replace professional medical care. Always consult a licensed
        healthcare provider for diagnosis and treatment. Use our suggestions as a starting
        point for a better conversation with your doctor.
      </p>

      <h2 className="text-3xl font-bold mt-12 mb-4 text-primary">Looking Ahead</h2>
      <p className="text-lg mb-6 text-gray-700">
        We’re working to expand our symptom database, train smarter models,
        and build helpful features like appointment scheduling and health tracking —
        making healthcare smarter, safer, and accessible for everyone.
      </p>

      <p className="text-lg text-gray-800">
        Thank you for choosing <strong>HealthWiser</strong> —
        your smart step toward a healthier, more informed you. 💙
      </p>
    </div>
  );
};

export default About;
