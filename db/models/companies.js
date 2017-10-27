const Sequelize = require('sequelize');
var db = require('../db.js');

const Companies = db.define('companies',{
	company_id: Sequelize.INTEGER,
	fractal_index: Sequelize.FLOAT 
})

module.exports = Companies;