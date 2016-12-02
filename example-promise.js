var request = require('request');

function getWeather (location) {
	return new Promise (function (resolve, reject){
		var encodedLocation = encodeURIComponent(location);
		var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&units=imperial';
		var key = '&appid=b269b996c49845a673d10fcd924018bb';
		var url2 = url+key

		if (!location) {
			return reject('No location provided');
		}

		request({
			url: url2,
			json: true
		}, function (error, response, body) {
			if (error) {
				reject('Unable to fetch weather.');
			} else {
				resolve('It\'s ' + body.main.temp + ' in ' + body.name + '!');
			}
		});
	})
}

getWeather(' denver').then(function(currentWeather){
	console.log(currentWeather);
}, function (error){
	console.log(error);
})

// function dowork(data, callback) {
// 	callback('done');
// 	callback('done second');
// }


// //it will wiat to resolve or object
// // inside promise it will only run once and ignore other calls. 
// function doWorkPromise (data) {
// 	return new Promise(function (resolve, reject){
// 		//for more delay you can set a time out
// 		setTimeout(function(){
// 			//resolve('everything is working');
// 			reject('everything went wrong');
// 		}, 12000);
		
// 		// reject({
// 		// 	error: ' something went wrong'
// 		// });
// 	});

// }

// doWorkPromise('some data').then(function(data){
// 	console.log(data);
// }, function (error){
// 	console.log(error);
// });