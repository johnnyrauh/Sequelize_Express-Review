const express = require('express');
const router = express.Router();
const Student = require('../db/models/studentModel');

// make sure you have next in the function below of the catch will not work
router.get('/', function (req, res, next) {
  // Student.findAll() returns a Promise
  Student.findAll()
  .then(function (students) {
    res.status(201).json(students)
  })
  // because we already have an error handler we just use next
  .catch(next)
})

router.post('/', function (req, res, next) {
  // Student.create returns a promise
  Student.create(req.body)
  .then(function (student) {
    res.status(201).json(student)
  })
  .catch(next)
})

router.put('/:id', function (req, res, next) {
  Student.update(req.body, {
    where: {
      id: req.params.id
    },
    returning: true
  })
  .then(function (values) {
    console.log(values[1])
    res.send('user updated');
  })
  .catch(next)
})


module.exports = router;
