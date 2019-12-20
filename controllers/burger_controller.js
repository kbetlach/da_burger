var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne(req.body.burger_name, function(result) {

    res.json({ id: result.insertId });
  });
});

//Devour Update
router.put("/api/burgers/:id", function(req, res) {
  var condition = req.params.id;

  burger.updateDevour(condition, function(result) {
    res.json(result);
  });
});

//Order Up Update
router.put("/api/burgersTwo/:id", function(req, res) {
  var condition = req.params.id;

  burger.updateOrder(condition, function(result) {
    res.json(result);
  });
});

router.delete("/api/burgers/:id", function(req, res) {
  var condition = req.params.id;

  burger.delete(condition, function(result) {
    res.json(result);
  });
});

module.exports = router;