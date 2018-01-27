const Sequelize = require('sequelize')
// remember the ../ is used to step up in directory
const db = require('../database')
const Op = Sequelize.Op;

const Student = db.define('student', {

  firstName: {
    type: Sequelize.STRING,
    // allowNull
    allowNull: false
  },

  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
}, {
  hooks: {
    beforeValidate: function (student) {
      student.firstName = student.firstName[0].toUpperCase();
      student.lastName = student.lastName[0].toUpperCase();
    }
  }
})

// Instance Methods // get initials
// instance method is looking at one single row and doing something with that row
Student.prototype.getInitials = function () {

  // return this.firstName[0] + this.lastName[0];
}

module.exports = Student
