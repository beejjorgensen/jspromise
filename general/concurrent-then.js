#!/usr/bin/env node

const delay = require('./delay.js');

// Start one chain of processes
delay(1)
	.then(() => console.log('A: 1 second elapsed'))
	.then(() => delay(2))
	.then(() => console.log('A: 2 more seconds elapsed'));

// Start another which will run concurrently with the first
delay(2)
	.then(() => console.log('B: 2 seconds elapsed'))
	.then(() => delay(2))
	.then(() => console.log('B: 2 more seconds elapsed'));

/*

Output:

A: 1 second elapsed
B: 2 seconds elapsed
A: 2 more seconds elapsed
B: 2 more seconds elapsed

*/
