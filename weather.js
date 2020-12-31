var request = require("request");

module.exports = function (location, callback){
	
	var encodedLocation = encodeURIComponent(location);
	
	var url = 'http://api.openweathermap.org/data/2.5/weather?appid=701e4f8bea605114467b33ada696ba23&q='+encodedLocation+'&units=imperial';

	if(!location){
		callback("There is no location");
		return;
	}

	request({
		url: url,
		json: true
	}, function(error, response, body){
		if(error){
			return callback("Location could not be fetched");
		}else{
			return callback("It\'s " + body.main.temp + " in " + body.name + '!');
		} 

	});
}