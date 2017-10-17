#!/usr/bin/env node

const delay = require('./delay.js');

// async function to delay and print

async function doEverything() {
	await delay(1);
	console.log('1 second elapsed');
	await delay(2);
}

// doEverything() is an async function so it returns a Promise; we can
// use .then() on it:

doEverything()
	.then(() => console.log('A: all done!'));


// Or we can use await for it:

(async () => {
	await doEverything();
	console.log('B: all done!');
})();

/*

Output:

1 second elapsed
1 second elapsed
A: all done!
B: all done!

*/

