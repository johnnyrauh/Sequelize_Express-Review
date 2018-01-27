const express = require('express');
const router = express.Router();
const Test = require('../db/models/testModel');

router.get('/', function (req, res, next) {
  Test.findAll()
  .then(function (tests) {
    res.status(201).json(tests)
  })
  .catch(next)
})

router.post('/', function (req, res, next) {
  Test.create(req.body)
  .then(function (test) {
    res.status(201).json(test)
  })
  .catch(next)
})

router.put('/:id', function (req, res, next) {
  Test.update(req.body, {
    where: {
      id: req.params.id
    },
    returning: true
  })
  .then(function (values) {
    res.send('user updated');
  })
  .catch(next)
})


module.exports = router;
