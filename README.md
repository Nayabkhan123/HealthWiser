# Personalized Medical Recommendation System 🩺🤖



A practical **Personalized Medical Recommendation System** that predicts possible diseases based on symptoms using a **Support Vector Classifier (SVC)** and provides recommendations for:

- Disease description
- Precautions
- Medications
- Diet plans
- Workouts

---

## 📌 **Description**

This project uses **machine learning** with a symptom-to-disease dataset to help users: 1️⃣ Enter symptoms →\
2️⃣ Get the predicted disease →\
3️⃣ See recommended precautions, medications, diets, workouts.

The project is tested using real `.csv` files for:

- Symptoms
- Descriptions
- Precautions
- Medications
- Diets
- Workouts

---

## ✨ Features

- **AI-Powered Diagnosis:** Predicts the most likely disease or condition based on a list of user-provided symptoms.
- **Detailed Health Information:** For each predicted disease, the application provides a comprehensive summary, including:
  - Description of the disease
  - Recommended precautions and lifestyle adjustments
  - Suggested medications
  - Dietary advice
  - Workout recommendations
- **Clean and Intuitive UI:** A user-friendly interface built with React.js and styled with Tailwind CSS for a seamless experience.
- **Scalable Architecture:** A microservice-like architecture with a separate Flask model server and a Node.js frontend server allows for easy maintenance and scaling.

## 🚀 How It Works

The application operates on a robust backend system that integrates several components:

1. **Frontend (React.js):** Users enter their symptoms into a text field.
2. **API Gateway (Node.js/Express):** A Node.js server acts as a proxy, receiving the symptom data and forwarding it to the Flask backend. This helps manage requests and provides a unified API endpoint.
3. **ML Backend (Python/Flask):** The Flask application loads a pre-trained `Support Vector Classifier (SVC)` model from `svc.pkl`.
4. **Data Processing:** The user's symptoms are converted into a numerical vector that the model can understand.
5. **Prediction:** The SVC model analyzes the symptom vector to predict a disease.
6. **Information Retrieval:** The Flask app then fetches relevant data (description, precautions, diet, medications, etc.) for the predicted disease from various CSV files (`description.csv`, `precautions_df.csv`, etc.).
7. **Response:** The Node.js server receives this detailed information and sends it back to the React frontend, which displays the results to the user.

## 💻 Technology Stack

### Frontend

- **React.js:** A JavaScript library for building user interfaces.
- **React Router:** For handling navigation between different pages.
- **Tailwind CSS:** A utility-first CSS framework for rapid styling.
- **Axios:** For making API requests to the backend.

### Backend

- **Python (Flask):** A micro-framework for the core ML prediction API.
- **Node.js (Express):** A JavaScript runtime and framework for the proxy server.

### Machine Learning

- **Scikit-learn:** For the Support Vector Classifier (SVC) model.
- **Pandas & NumPy:** For data handling and numerical operations.

## ⚙️ Installation and Setup

### Prerequisites

- [Node.js & npm](https://nodejs.org/en)
- [Python 3.8+](https://www.python.org/)
- `pip` (Python package installer)

### Step 1: Clone the repository

```bash
git clone https://github.com/Nayabkhan123/HealthWiser
cd HealthWiser
```

### Step 2: Set up the Python Backend

First, install the required Python packages. It is highly recommended to use a virtual environment.

```bash
# Create a virtual environment
python -m venv venv
# Activate the virtual environment
# On Windows:
# venv\Scripts\activate
# On macOS/Linux:
# source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

*Note: You may need to create a **``** file from your project by running **``**.*

To run the Flask server:

```bash
python app.py
```

The Flask server will run on `http://localhost:5000`.

### Step 3: Set up the Node.js Server

Navigate to the root directory where `index.js` is located and install the Node.js dependencies.

```bash
npm install
```

To start the Node.js server:

```bash
npm start
```

The Node.js server will run on `http://localhost:4000`.

### Step 4: Access the Application

Once both servers are running, open your web browser and go to `http://localhost:4000`. The frontend will be served from the Node.js server and will communicate with the Flask backend through the proxy.

<!-- ## 📸 Screenshots

| Homepage | About Page | Prediction Result |
| -------- | ---------- | ----------------- |
|          |            |                   | -->

## 🤝 Contributing

We welcome contributions! If you have suggestions for new features, bug fixes, or improvements, please feel free to open an issue or submit a pull request.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Developer

- **Nayab Khan**
- **Email:** [nayab16366@gmail.com](mailto\:nayab16366@gmail.com)
- **GitHub:** [https://github.com/Nayabkhan123](https://github.com/Nayabkhan123)
- **LinkedIn:** [https://www.linkedin.com/in/nayab-khan-b424152a5](https://www.linkedin.com/in/nayab-khan-b424152a5)

