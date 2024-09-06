const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

const todoRoutes = require("./routes/todos");
app.use("/api/todos", todoRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
