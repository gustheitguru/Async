function doWork (shouldFail) {
	return new Promise (function (resolve, reject){
		setTimeout(function(){
			if (typeof shouldFail === 'boolean' && shouldFail === true) {
				reject ('error message');
			} else {
				resolve ('success');
			}
			console.log('done');
			resolve();
		}, 1000);
	});
}

doWork().then(function() {
	return doWork(true);
}).then(function (message) {
	console.log(message);
}).catch(function(error) {
	console.log(error);
});


function getLocation() {
	return new Promise (function (resolve, reject){
		resolve('denver');
	});
}

function getWeather(location){
	return new Promise(function (resolve, reject){
		resolve('its cold out in '+ location, '!');
	});
}

getLocation().then(function(location){
	return getWeather(location);
}).then(function(currentWeather){
	console.log(currentWeather);
});