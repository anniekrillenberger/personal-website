require('dotenv').config();
const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 5000;
const API_KEY = process.env.API_KEY;
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, { useUnifiedTopology: true });

// Enable CORS for your frontend (localhost during development)
const allowedOrigins = ['http://localhost:3000', 'https://krillenberger.com'];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

// Middleware
app.use(cors());
app.use(express.json());

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    const database = client.db('website-db');
    const experiencesColl = database.collection('experiences');

    // Example route
    app.get('/experiences', async (req, res) => {
      const data = await experiencesColl.find({}).toArray();
      res.json(data);
    });

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

connectToDatabase();