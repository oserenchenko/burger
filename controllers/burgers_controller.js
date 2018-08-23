var burger = require("../models/burger.js");

var express = require("express");

var router = express.Router();

router.get("/", function (req, res) {
  burger.all(function (data) {
    var burObj = {
      burger: data
    }
    console.log(burObj);
    res.render("index", burObj);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.create("burger_name", req.body.name, function (results) {
    res.json({
      id: results.insertId
    });
  });
});

router.put("/api/burgers/:id", function (req, res) {
  burger.update("devoured", true, "id", req.params.id, function (results) {
    if (results.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;