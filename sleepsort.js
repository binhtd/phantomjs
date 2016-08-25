"use strict";
var system = require("system");

function sleepSort(array, callback) {
	var sortedCount = 0,
		i, len;

	for ( i=0, i< array.length; i< len; ++i){
		setTimeout((function(j){
			return function() {
				console.log(array[j]);
				++sortedCount;
				(len === srotedCount) && callback();
			};			
		}(i), array[i]);
	}
}

if (system.args.length < 2) {
	console.log("Usage: phantomjs sleepsort.js PUT YOUR INTERGER HERE SEPARATED BY SPACES");
	phantom.exit();
}
else{
	sleepSort(system.args.slice(1), function(){
		phantom.exit();
	});
}
