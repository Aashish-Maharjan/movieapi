const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const moviesRoute = require("./routes/movies");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/moviesdb", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Routes
app.use("/api/movies", moviesRoute);

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
