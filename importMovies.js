const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Movie = require('./models/Movie'); 


const filePath = path.join(__dirname, 'movies.json');
const moviesData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

const MONGO_URI = 'mongodb+srv://mhzaashish:k9LW1aRz4nf9fhlv@cluster0.jamxd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Replace with your MongoDB URI


mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    return Movie.insertMany(moviesData); 
  })
  .then(() => {
    console.log('Data imported successfully!');
    mongoose.connection.close(); 
  })
  .catch(err => {
    console.error('Error importing data:', err);
    mongoose.connection.close(); 
  });