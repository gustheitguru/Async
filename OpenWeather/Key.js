// api Key for OpenWeather
var key = 'b269b996c49845a673d10fcd924018bb';

// this line will be what is being sent or recieved from API
var encodedLocation = 'EncodedLocation';

// full API URL with Key and Encoded Location
var url = 'http://api.openweathermap.org/data/2.5/weather?appid='+ key +'q=' + encodedLocation + '&units=imperial';

console.log(key);
console.log(url);