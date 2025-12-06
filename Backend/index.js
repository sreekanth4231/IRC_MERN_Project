

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db");
const router = require("./Routes/studentRoute");

const app = express();


app.use(
  cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);


app.use(express.json());


db();


app.use("/api", router);


app.get("/", (req, res) => {
  res.send("API is running successfully");
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
