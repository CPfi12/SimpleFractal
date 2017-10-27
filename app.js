const express = require('express');
const app = express();
const path = require('path');
let db = require('./db');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bundlefold')));
app.use('/',require('./server/routes'));
db.sync()
	.then(function(){
		app.listen(3000,function(){
		})
	})

module.exports = app;