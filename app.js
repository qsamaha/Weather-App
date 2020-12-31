
var weather = require('./weather.js');
var location = require('./location.js');

var argv = require("yargs")
	.command('create', 'retreives location', function(yargs){
		yargs.option('location', {
	  demand: true,
      desc: 'Gives weather for location provided',
      type: 'string',
      alias: 'l'
     
    }).help('help');
})

	.help('help')
	.argv;

var command = argv._[0];

if(command === 'create' && argv.location !== '' && argv.location !== "undefined"){
	weather(argv.location, function(weather){
		console.log(weather);
	});
	
}else {
	location(function(location){
		weather(location, function(weather){
			console.log(weather);
		})
	});
}







