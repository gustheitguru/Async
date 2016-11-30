//fetch user location based on IP address 
var request = require('request');
var url = 'http://ipinfo.io';

module.exports = function (callback) {
	request ({
		url: url, 
		json:true
	}, function (error, response, body) {
		if (error) {
			callback('unable to fetch ZipCode');
		} else {
			callback(body);

		}

	});
}