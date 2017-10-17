(() => {

	/**
	 * Set the status field
	 */
	function setStatus(s) {
		document.querySelector('#status').innerHTML = s;
	}

	/**
	 * Show the data
	 */
	function showData(data) {
		document.querySelector('#data-holder').innerHTML = data;
	}

	/**
	 * Load and show the data using Promises and .then()
	 */
	function loadData() {
		setStatus('Loading JSON');

		xhrP('data.txt')
			.then(showData)
			.then(() => setStatus('Load complete'));
	}

	/**
	 * Load and show the data using await/async
	 */
	async function loadDataAwait() {
		setStatus('Loading JSON');

		let data = await xhrP('data.txt');
		showData(data);

		setStatus('Load complete');
	}

	function onLoad() {
		//loadData(); // .then() version
		loadDataAwait(); // async/await version
	}

	window.addEventListener('load', onLoad);

})();