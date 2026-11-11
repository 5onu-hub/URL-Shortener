const express = require("express");

const {
  handleGenerateShortURL,
  getShortID,
  handleGetAnalytics,
} = require("../controllers/Url");

const route = express.Router();

route.post("/", handleGenerateShortURL);
route.get("/:shortId", getShortID);
route.get("/analytics/:shortId", handleGetAnalytics);


module.exports = { route };
