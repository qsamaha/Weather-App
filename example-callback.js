
var weather = require('./weather.js');

weather(function(weathered){
	console.log(weathered);
});

// request({
// 	url: url, 
// 	json: true 
// }, function (error, response, body){
// 	if(error){
// 		console.log('Unable to fetch weather');
// 	}else{
// 		console.log(JSON.stringify(body, null, 4));
// 		console.log("Its " + body.main.temp + " in " + body.name);
// 	}


// });