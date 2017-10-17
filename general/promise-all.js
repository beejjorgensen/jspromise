#!/usr/bin/env node

const delay = require('./delay.js');

// This only runs for 3 total seconds since all three delays are running
// concurrently:

Promise.all([delay(1), delay(2), delay(3)])
	.then(() => console.log('3 seconds have elapsed'));

/*

Output:

3 seconds have elapsed

*/