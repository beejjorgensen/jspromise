#!/usr/bin/env node

const delay = require('./delay.js');

// Unsuccessful delay
delay(-1)
	.then(() => console.log('-1 seconds elapsed'))
	.catch((err) => console.log('Error: ' + err));

/*

Output:

Error: seconds must be non-negative

*/