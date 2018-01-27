const Sequelize = require('sequelize')
// remember the ../ is used to step up in directory
const db = require('../database')
const Op = Sequelize.Op;
const Student = require('./studentModel');

const Test = db.define('test', {

    subject: {
      type: Sequelize.STRING,
      allowNull: false
    },

    grade: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  })


// Class Method
// class is looking at the entire table (the whole model)
// to use [Op] we must first declare (look at line 4)

Test.passing = function () {
  return Test.findAll({
    where: {
      grade: {
        [Op.gte]: 70
      }
    }
  })
}

// Only do this one page
Test.belongsTo(Student);

module.exports = Test;

