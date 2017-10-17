#!/usr/bin/env node

// Ref: resolve-reject.js

Promise.resolve()
	.then(() => console.log(1))
	.then(() => Promise.reject(2))
	.then(() => console.log(3))
	.then(() => console.log(4))
	.catch((err) => console.log('Caught ' + err))
	.then(() => console.log(5))
	.catch((err) => console.log('Error: ' + err));

/*

Output:

1
Caught 2
5

*/