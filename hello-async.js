//liner screen print out 
console.log('1');
console.log('2');

//set delay on command
// setTimeout(2 commands) first is a function and then delay time in seconds.
setTimeout(function(){
	console.log('1');
}, 3000);
console.log('2');

//______________________________________________________________
// Challenge

console.log('Challenge');

function printInTwoSeconds (message) {
	//setTimeout 2000
	var messages = message
	setTimeout(function(){
		//	console print message var
		console.log(message);
	}, 2000)
	
}

printInTwoSeconds('hello world');