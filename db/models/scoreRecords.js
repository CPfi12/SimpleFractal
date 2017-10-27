const Sequelize = require('sequelize');
var db = require('../db.js');

const ScoreRecords = db.define('score-records',{
	candidate_id: Sequelize.INTEGER,
	communication_score: Sequelize.INTEGER,
	coding_score: Sequelize.INTEGER,
	title: Sequelize.STRING,
	company_id: Sequelize.INTEGER 
})

module.exports = ScoreRecords;