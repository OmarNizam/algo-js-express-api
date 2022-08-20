const PORT = 8000;

const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const { solution, isBadVersion } = require("./badVersion");

solution(isBadVersion(4));

const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(PORT, () => console.log(`server running on ${PORT}`));
