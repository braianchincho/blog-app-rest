const express = require("express");
const mongoose = require("mongoose");
const iniciarRutas = require("./routes/index.routes");
const bodyParser = require("body-parser");

// Connect to MongoDB database
mongoose
  .connect("mongodb://localhost:27017/blogdb", { useNewUrlParser: true })
  .then(() => {
    iniciarAPI();
  });

function iniciarAPI() {
  const app = express();
  app.use(bodyParser.json());
  iniciarRutas(app);
  
  app.listen(5000, () => {
    console.log("Server has started!")
  })
}

