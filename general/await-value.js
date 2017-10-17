#!/usr/bin/env node

const delaySqrt = require('./delay-sqrt.js'); // new Promise implementation
//const delaySqrt = require('./delay-sqrt-await.js'); // async/await implementation

// .then() version

delaySqrt(2)
	.then((res) => console.log('A: sqrt(2) = ' + res))
	.catch((err) => console.log('A: error: ' + err));

// await version

(async () => {
	try {
		let res = await delaySqrt(2);
		console.log('B: sqrt(2) = ' + res);
	} catch (err) {
		console.log('B: error: ' + err);
	}
})();

/*

Output:

A: sqrt(2) = 1.4142135623730951
B: sqrt(2) = 1.4142135623730951

*/