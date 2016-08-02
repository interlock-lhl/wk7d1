var express = require('express');
var router = express.Router();

const Models = require('../models');
const User = Models.User;

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.collection().fetch().then(function(users) {
    res.set('Content-Type', 'application/json');
    res.send(users.serialize());
  });
});

router.get('/:id', function(req, res, next) {
  User.where('id', '=', req.params["id"]).fetch().then(function(user) {
    res.set('Content-Type', 'application/json');
    res.send(user.serialize());
  });
});

router.post('/:id', function(req, res, next) {
  User.where('id', '=', req.params["id"]).fetch().then(function(user) {
    user.set(req.body).save().then(function() {
      res.send(user.serialize());
    });// TODO filter to valid fields that can updated
  });
});

module.exports = router;
