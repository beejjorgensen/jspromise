#!/usr/bin/env node

// Ref: resolve-reject.js

Promise.resolve()
	.then(() => console.log(1))
	.then(() => Promise.reject(2))
	.then(() => console.log(3))
	.catch((err) => console.log('Error: ' + err));

/*

Output:

1
Error: 2

*/