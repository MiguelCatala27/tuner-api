const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.status(200).send("Bwahaha Music");
});

app.get("*", (req, res) => {
    res.status(404).send("Page not Found");
});

module.exports = app;