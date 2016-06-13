"use strict";

var fs = require("fs");
//Query for a json file that maps all projects in the data directory
//to a particular path in the data folder

var content = fs.readFileSync("data/pathmap.json");
var jsoncontent = JSON.parse(content);


module.exports.getPath = function (ncId){
	let lowncId = ncId.toLowerCase();
	if(jsoncontent[lowncId])
		return jsoncontent[lowncId];
	else
		console.log("This project doesn't exist");
		return 1;
}
