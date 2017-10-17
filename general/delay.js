/**
 * delay()
 * 
 * Returns a new Promise that resolves after the specified number of
 * seconds.
 */
module.exports = (seconds) => {
	return new Promise((resolve, reject) => {
		if (seconds < 0) {
			reject('seconds must be non-negative');
		} else {
			setTimeout(resolve, seconds * 1000);
		}
	});
};