const express = require("express")
const mongoose = require("mongoose") // new
const router = require("./routes/articulos")
const bodyParser = require("body-parser")


// Connect to MongoDB database
mongoose
  .connect("mongodb://localhost:27017/blogdb", { useNewUrlParser: true })
  .then(() => {
    const app = express();

    app.get('/', function (req, res) {
        res.send('Hello World!');
      });
    app.use('/api',router);
    app.use(bodyParser.json());
    app.listen(5000, () => {
      console.log("Server has started!")
    })
  });