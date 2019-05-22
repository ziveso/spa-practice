const express = require("express");
const db = require("./database");
const { streaming } = require("./logic/Twitter");

const app = express();
const PORT = 8080;
const HOST = "0.0.0.0";
// console.log(process.env);
app.get("/", (req, res) => {
  res.send("SPA practice API");
});

app.get("/readDb", (req, res) => {
  res.send(db.read());
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

streaming("guy");
