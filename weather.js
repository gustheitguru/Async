// var request = require('request');

// module.exports = function (callback) {
// 	var encodedLocation = encodeURIComponent(location);


// 	var url = 'http://api.openweathermap.org/data/2.5/weather?q='+ encodedLocation +'&units=imperial';

// 	var key = '&appid=b269b996c49845a673d10fcd924018bb';

// 	var url2 = url+key
// 	//move url into here 
// 	encodedURIComponent(location);

// 	if (!location) {
// 		return callback('no location aquireed');
// 	}
// 	//somesite.com/A%20test
// 	// encoded "a test"



// 	request ({
// 		url: url2, 
// 		json:true
// 	}, function(error, response, body){
// 		if (error) {
// 			callback('unable to fetch weather');
// 		} else {
// 			//console.log(JSON.stringify(body, null, 4));
// 			//string is in the body variable so just parse out data from there.
// 			callback('It\'s ' + body.main.temp +' in '+ body.name +'!');

// 		}

// 	});
// }

var request = require('request');

module.exports = function (location, callback) {
	var encodedLocation = encodeURIComponent(location);
	var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&units=imperial';
	var key = '&appid=b269b996c49845a673d10fcd924018bb';
	var url2 = url+key

	if (!location) {
		return callback('No location provided');
	}

	request({
		url: url2,
		json: true
	}, function (error, response, body) {
		if (error) {
			callback('Unable to fetch weather.');
		} else {
			callback('It\'s ' + body.main.temp + ' in ' + body.name + '!');
		}
	});
}
// this is built into nodeJS and can be set to anything 
// module.exports = function (){
// 	console.log('Got Weather!');
// }
