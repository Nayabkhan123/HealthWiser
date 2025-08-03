import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [symptoms, setSymptoms] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [allSymptoms, setAllSymptoms] = useState([]);
  const [showSymptomsModal, setShowSymptomsModal] = useState(false);

  useEffect(() => {
    const fetchSymptoms = async () => {
      try {
        const res = await axios.get('http://localhost:4000/api/symptoms');
        const list = res.data?.data?.SymptomsList;
        if (list) {
          setAllSymptoms(list);
        }
      } catch (err) {
        console.error("Failed to fetch symptoms list:", err);
      }
    };

    fetchSymptoms();
  }, []);

  const resultsRef = useRef(null);

//   const handleSpeechRecognition = () => {
//     alert("🎙️ Speech recognition coming soon!");
//   };

  const handlePredict = async () => {
    if (!symptoms.trim()) {
      setError("Please enter at least one symptom.");
      return;
    }

    const symptomArray = symptoms
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    if (symptomArray.length === 0) {
      setError("Please enter valid symptoms.");
      return;
    }

    setError("");
    setLoading(true);
    setResult(null);

    try {
      const response = await axios.post("http://localhost:4000/api/predict", {
        symptoms: symptomArray,
      });

      if (response.data && response.data.success) {
        setResult(response.data.data);
        setTimeout(() => {
          resultsRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 300);
      } else {
        setError("Prediction failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Prediction failed. Please check your server or input.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col items-center py-20 px-4 w-full max-w-7xl mx-auto">
      {/* Hero */}
      <section className="text-center mb-12">
        <h1 className="text-5xl font-extrabold mb-4 text-green-700">
          🤖 HealthWiser AI
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Enter your symptoms below and let our AI model give you instant
          health insights, precautions, medications, and healthy suggestions.
        </p>
      </section>

      {/* Input Box */}
      <section className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-8 gap-4 flex flex-col border border-gray-200">
        <label className="block mb-2 text-lg font-semibold text-gray-800">
          Symptoms <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="e.g. itching, skin_rash, headache"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          className="w-full p-4 mb-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-green-500"
        />

        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          {/* <button
            onClick={handleSpeechRecognition}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition font-medium"
          >
            🎙️ Speak Symptoms
          </button> */}

          <button
            onClick={() => setShowSymptomsModal(true)}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition font-medium"
            >
            View All Symptoms
          </button>

          <button
            onClick={handlePredict}
            disabled={loading}
            className={`flex-1 ${
              loading
                ? "bg-green-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            } text-white py-3 rounded-xl transition font-medium`}
          >
            {loading ? "Predicting…" : "Predict Now"}
          </button>
        </div>

        {error && (
          <p className="text-red-600 mt-4 font-semibold">{error}</p>
        )}
      </section>
      <div ref={resultsRef} className="w-full h-1">{" "}</div>
      {/* Results */}
      {result && (
        <section
          className="mt-20 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <ResultCard
            title="Disease"
            icon="🦠"
            color="bg-orange-500"
            content={result.predicted_disease}
          />
          <ResultCard
            title="Description"
            icon="📋"
            color="bg-blue-500"
            content={result.description}
          />
          <ResultCard
            title="Precautions"
            icon="✅"
            color="bg-purple-500"
            list={result.precautions}
          />
          <ResultCard
            title="Medications"
            icon="💊"
            color="bg-red-500"
            list={result.medications}
          />
          <ResultCard
            title="Workouts"
            icon="🏋️"
            color="bg-green-500"
            list={Array.isArray(result.workout) ? result.workout : [result.workout]}
          />
          <ResultCard
            title="Diet"
            icon="🥗"
            color="bg-yellow-500"
            list={result.diet}
          />
        </section>
      )}

      {/* Modal */}
      {showSymptomsModal && (
  <div
    className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
    onClick={() => setShowSymptomsModal(false)}
  >
    <div
      className="bg-white w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl relative flex flex-col"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Modal Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <h3 className="text-2xl font-bold text-green-700">
          📋 All Supported Symptoms
        </h3>
        <button
          className="text-gray-500 hover:text-gray-800 text-2xl transition"
          onClick={() => setShowSymptomsModal(false)}
        >
          &times;
        </button>
      </div>

      {/* Modal Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {allSymptoms.map((symptom, idx) => (
            <span
              key={idx}
              className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-200 transition cursor-pointer"
            >
              {symptom.replace(/_/g, " ")}
            </span>
          ))}
        </div>
      </div>

      {/* Optional Footer */}
      <div className="px-6 py-4 border-t border-gray-200 text-right">
        <button
          onClick={() => setShowSymptomsModal(false)}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full font-medium transition"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}

    </main>
  );
}

function ResultCard({ title, icon, content, list }) {
  return (
    <div className="relative overflow-hidden group bgwhite border border-gray-200 rounded-3xl p-6 shadow hover:shadow-lg transition flex flex-col">
      {/* Background Icon */}
      <div className="absolute inset-0 z-[-1] flex items-center justify-center opacity-0 scale-75 group-hover:opacity-50 group-hover:scale-100 transition-all duration-500 ease-in-out text-[8rem] pointer-events-none">
        {icon}
      </div>

      {/* Foreground Icon */}
      <div className="flex items-center justify-center mr-4">
        <div className="flex items-center justify-center mb-4 text-3xl transition-opacity duration-500 ease-in-out group-hover:opacity-0">
          {icon}
        </div>

        <h3 className="text-xl font-bold mb-3 text-center text-green-700">
          {title}
        </h3>
      </div>

      {list?.length ? (
        <ul className="list-disc list-inside text-left space-y-1">
          {list.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-base text-gray-800 text-center whitespace-pre-wrap">
          {content || "N/A"}
        </p>
      )}
    </div>
  );
}
