const express = require("express");
const { urlModel } = require("../models/Url");

const staticRoute = express.Router();

staticRoute.get("/", async (req, res) => {

    const allUrls = await urlModel.find({});

    return res.render("home", {
        allUrls: allUrls
    });
});

module.exports = {
    staticRoute
};