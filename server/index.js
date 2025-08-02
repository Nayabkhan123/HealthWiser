const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

// POST /api/predict - Proxy to Flask
app.post('/api/predict', async (req, res) => {
  const { symptoms } = req.body;

  if (!symptoms || !Array.isArray(symptoms)) {
    return res.status(400).json({ error: 'Invalid symptoms data. It must be an array.' });
  }

  try {
    // Forward POST to Flask
    const response = await axios.post('http://localhost:5000/predict', {
      symptoms
    });

    // Flask returns: { disease, description, precautions, medications, diet, workout }
    res.json({
      success: true,
      data: response.data
    });

  } catch (err) {
    console.error('Error forwarding to Flask:', err.message);
    if (err.response) {
      console.error('Flask returned:', err.response.data);
    }
    res.status(500).json({ error: 'Prediction failed. Please try again.' });
  }
});

// Basic health check
app.get('/api/symptoms', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:5000/');
    res.json({ success: true, data: response.data });
  } catch (err) {
    console.error('Error fetching symptoms:', err.message);
    res.status(500).json({ error: 'Failed to fetch symptoms.' });
  }
});


const PORT = 4000;
app.listen(PORT, () => {
  console.log(`✅ Node.js proxy running on http://localhost:${PORT}`);
});
