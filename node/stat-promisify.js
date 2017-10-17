#!/usr/bin/env node

const fs = require('fs');
const util = require('util');

// NOTE: three calls to stat() here will all run concurrently.

// The three calls also have identical functionality.

// Classic callback method:

fs.stat('.', (err, stats) => {
	if (err) {
		console.error(err);
	} else {
		console.log('callback: ' + stats.size);
	}
});

// Promisified versions

const stat = util.promisify(fs.stat);

// .then() version

stat('.')
	.then((stats) => console.log('.then(): ' + stats.size))
	.catch((err) => console.error(err));

// await version
(async () => {
	try {
		let stats = await stat('.');
		console.log('await: ' + stats.size);
	} catch (err) {
		console.error(err);
	}
})(); // call immediately

/*

Output (order and size may vary by system):

callback: 4096
.then(): 4096
await: 4096

*/