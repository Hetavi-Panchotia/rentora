const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const propertyRoutes = require('./routes/propertyRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/properties', propertyRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('Rentora API is running...');
});

module.exports = app;
