#!/usr/bin/env node

const delay = require('./delay.js');

// Successful delays
delay(1)
	.then(() => console.log('1 second elapsed'))
	.then(() => delay(2))
	.then(() => console.log('2 more seconds elapsed'));

/*

Output:

1 second elapsed
2 more seconds elapsed

*/