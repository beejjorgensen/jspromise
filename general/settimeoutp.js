#!/usr/bin/env node

// Promisified version of setTimeout()

function setTimeoutP(ms) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms);
	});
}

setTimeoutP(1000).then(() => console.log('1 second elapsed'));

/*

Output:

1 second elapsed

*/