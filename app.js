const express = require('express');
const bodyParser = require('body-parser');
const volleyball = require('volleyball');
const routes = require('./routes/index');
const db = require('./db/database');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));

// volleyball is logging middleware which will allow for error logging
// re-configuring data that will be understood by our program
app.use(volleyball);

// no matter what the route is, we want to utilize the below
// comes down and hits line 18 and jumps to
// every request that comes in will be at minimum requirement of 3000/
app.use('/', routes)

// status 500 is server-side error
// err.stack cr
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('server-side error')
})

// when you make a change to the model use db.sync({force: true})
db.sync()
.then(function () {
  app.listen(3000, function () {
    console.log("Sever is listening on port 3000!");
  })
})






