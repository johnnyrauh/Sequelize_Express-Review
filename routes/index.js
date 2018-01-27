const express = require('express');
const router = express.Router();
const studentRoute = require('./studentRoute');
const testRoute = require('./testRoute');

router.use('/students', studentRoute);
router.use('/tests', testRoute);

module.exports = router


