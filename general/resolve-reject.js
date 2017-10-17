#!/usr/bin/env node

// Demo Promise.resolve(), Promise.reject()

Promise.resolve()
	.then(() => console.log('A: Resolved!'))
	.catch(() => console.log('A: Rejected!'));

Promise.reject()
	.then(() => console.log('B: Resolved!'))
	.catch(() => console.log('B: Rejected!'));

Promise.resolve('Done')
	.then((result) => console.log('C: Resolved! ' + result))
	.catch((err) => console.log('C: Rejected! ' + err));

Promise.reject('Unspecified badness')
	.then((result) => console.log('D: Resolved! ' + result))
	.catch((err) => console.log('D: Rejected! ' + err));

/*

Output (order may vary):

A: Resolved!
C: Resolved! Done
B: Rejected!
D: Rejected! Unspecified badness

*/
