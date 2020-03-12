const express = require("express");
const router = express.Router();
let db = require("../models/database");
// let bodyParser = require("body-parser");

router.get("/viewblog", (req, res) => {
  res.render("viewblog");
});

module.exports = router;
