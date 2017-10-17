let xhrP = (url, method='GET') => {

	return new Promise((resolve, reject) => {
		let xhr = new XMLHttpRequest();

		xhr.open(method, url);
		xhr.onreadystatechange = () => {
			if (xhr.readyState === XMLHttpRequest.DONE) {
				if (xhr.status === 200) {
					resolve(xhr.responseText);
				} else {
					reject('error: ' + xhr.status);
				}
			}
		};
		xhr.send();
	});
};
