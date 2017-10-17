#!/usr/bin/env node

const delay = require('./delay.js');

// Successful delays
async function doEverything() {
	await delay(1);
	console.log('1 second elapsed');

	await delay(2);
	console.log('2 more seconds elapsed');
}

doEverything();

/*

Output:

1 second elapsed
2 more seconds elapsed

*/
