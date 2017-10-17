const delay = require('./delay.js');

/**
 * delaySqrt(n), async/await implementation
 * 
 * Promise object that takes the square root of a number after a
 * one-second delay
 */
module.exports = async (n) => {
	if (n < 0) {
		throw 'n must be non-negative';
	}

	await delay(1);

	return Math.sqrt(n);
};

