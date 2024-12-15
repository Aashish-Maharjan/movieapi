const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");


router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch movies" });
  }
});

module.exports = router;
