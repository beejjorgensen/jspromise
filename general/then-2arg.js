#!/usr/bin/env node

const delay = require('./delay.js');

// Successful delay
delay(1)
	.then(
		() => console.log('1 seconds elapsed'), // On success
		(err) => console.log('A: Error: ' + err)    // On error
	);

// Unsuccessful delay
delay(-1)
	.then(
		() => console.log('-1 seconds elapsed'), // On success
		(err) => console.log('B: Error: ' + err)    // On error
	);

/*

Output:

B: Error: seconds must be non-negative
1 seconds elapsed

*/