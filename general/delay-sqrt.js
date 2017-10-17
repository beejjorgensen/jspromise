/**
 * delaySqrt(n)
 * 
 * Promise object that takes the square root of a number after a
 * one-second delay
 */
module.exports = (n) => {
	return new Promise((resolve, reject) => {
		if (n < 0) {
			return reject('n must be non-negative');
		}

		setTimeout(() => { resolve(Math.sqrt(n)); }, 1000);
	});
};
