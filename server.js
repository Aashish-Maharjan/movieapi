const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const moviesRoute = require("./routes/routes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect("mongodb+srv://mhzaashish:k9LW1aRz4nf9fhlv@cluster0.jamxd.mongodb.net/api/movies?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Routes
app.use("/api/movies", moviesRoute);

// Start Server
const PORT = 5500;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
