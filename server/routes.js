const router = require('express').Router();
const Promise = require('bluebird');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
var Companies = require('../db/models/index.js').Companies;
var ScoreRecords = require('../db/models/index.js').ScoreRecords;



router.get('/percentiles/:id', function(req, res, next){
	let personLat;
	Promise.all([ScoreRecords.findOne({where:{candidate_id:req.params.id}}),Companies.findAll()])
		.spread((person,companies)=>{
			personLat = person;
			let hash = {};
			let include = [];
			companies.forEach((company)=>{
				hash[company.id] = company["fractal_index"]
			})
			let toComp = hash[person.company_id];
			for(var key in hash){
				let curr = hash[key];
				if(Math.abs(curr-toComp)<0.15)
					include.push(key);
			}
			return ScoreRecords.findAll({
						where:{
							company_id: {
								[Op.in]: include
							},
							title: person.title
						}
				    })
		})
		.then((output)=>{
			let comm = [];
			let code = [];
			let commPercentile, codePercentile;
			output.forEach((person)=>{
				comm.push(person.communication_score);
				code.push(person.coding_score);
			})
			comm = comm.sort((a,b)=>a-b);
			code = code.sort((a,b)=>a-b);
			let i=0;
			while(comm[i]<=personLat.communication_score){
				i++;
			}
			commPercentile = i/comm.length*100;
			let j=0;
			while(code[j]<=personLat.coding_score){
				j++;
			}
			codePercentile = j/code.length*100;
			res.send([commPercentile.toFixed(2),codePercentile.toFixed(2),personLat])


		})
		.catch(console.err)

					
})
	


module.exports = router;