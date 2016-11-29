var request = require('request');

var url = 'http://api.openweathermap.org/data/2.5/weather?q=lakewood,co&units=imperial';
var key = '&appid=b269b996c49845a673d10fcd924018bb';
var url2 = url+key
var weather = require('./weather.js');

weather(function (currentWeather){
	console.log(currentWeather);
});



console.log(url2);


request ({
	url: url2, 
	json:true
}, function(error, response, body){
	if (error) {
		console.log('unable to fetch weather');
	} else {
		//console.log(JSON.stringify(body, null, 4));
		//string is in the body variable so just parse out data from there.
		console.log('It\'s' + body.main.temp +' in '+ body.name +'!');

	}

});

//this will show before cause the call is being made
console.log('After request');