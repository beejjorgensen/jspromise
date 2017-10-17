#!/usr/bin/env node

const delay = require('./delay.js');

let promiseList = [];

// Build an array of Promises so we can wait on them all with
// Promise.all() later:

for (let i = 1; i <= 10; i++) {
	let p = delay(i); // delay() returns a Promise object

	promiseList.push(p); // Save it to the list
}

// This only runs for 10 total seconds since all delays are running
// concurrently:

Promise.all(promiseList)
	.then(() => console.log('10 seconds have elapsed'));


/*

Output:

10 seconds have elapsed

*/