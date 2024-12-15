const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const moviesRoute = require("./api/routes");

const app = express();

app.use(express.json());
app.use(cors());


mongoose
  .connect("mongodb+srv://mhzaashish:k9LW1aRz4nf9fhlv@cluster0.jamxd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 30000,})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));


app.use("/api/routes", moviesRoute);


const PORT = 5500;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
