const express = require("express");
const app = express();
const postRoutes = require("./routes/postRoutes");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

app.use(express.json());
app.use(logger); // Logger AVANT les routes

// Routes
app.use("/api", postRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to my Blog API!");
});

app.use(errorHandler); // Middleware d'erreur APRÈS les routes

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
