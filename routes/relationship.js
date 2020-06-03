var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Relationship = require('../models/Relationship.js');

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* GET ALL RELATIONSHIP */
router.get('/', function(req, res, next) {
  Relationship.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE RELATIONSHIP BY ID */
router.get('/:id', function(req, res, next) {
  Relationship.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE RELATIONSHIP */
router.post('/', function(req, res, next) {
  Relationship.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE RELATIONSHIP */
router.put('/:id', function(req, res, next) {
  Relationship.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE RELATIONSHIP */
router.delete('/:id', function(req, res, next) {
  Relationship.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
