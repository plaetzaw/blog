const express = require("express");
const router = express.Router();
let db = require("../models/database");
let bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: false }));

router.get("/makeblog", (req, res) => {
  db.query("SELECT * FROM categories").then(results => {
    db.query("SELECT * FROM authors").then(authors => {
      res.render("makeblog", {
        categories: results,
        authors: authors
      });
    });
  });
});

router.post("/makeblog", (req, res) => {
  let title = req.body.title;
  let body = req.body.body;
  let date = req.body.date;
  let authorid = req.body.authorid;
  let categoryid = req.body.categoryid;
  db.none(
    "INSERT INTO blogs (title, authorid, categoryid, body, date) VALUES ($1, $2, $3, $4, $5)",
    [title, authorid, categoryid, body, date]
  )
    .then(() => {
      res.redirect("/viewblog");
    })
    .catch(error => {
      res.send(error);
    });
});

module.exports = router;
