var request = require('request');

var url = 'http://api.openweathermap.org/data/2.5/weather?q=lakewood,co&units=imperial';
var key = '&appid=b269b996c49845a673d10fcd924018bb';
var url2 = url+key

module.exports = function (callback) {
	request ({
		url: url2, 
		json:true
	}, function(error, response, body){
		if (error) {
			callback('unable to fetch weather');
		} else {
			//console.log(JSON.stringify(body, null, 4));
			//string is in the body variable so just parse out data from there.
			callback('It\'s' + body.main.temp +' in '+ body.name +'!');

		}

	});
}






// this is built into nodeJS and can be set to anything 
// module.exports = function (){
// 	console.log('Got Weather!');
// }
