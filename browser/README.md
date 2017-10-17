# XHR (AJAX) Promise demo

This probably requires a webserver to run due to cross-domain policy issues.

Start a webserver in the `browser/` directory with Python 2.x:

    $ cd browser   
	$ python -m SimpleHTTPServer 8000

Python 3.x:

    $ python -m http.server 8000

then point to http://localhost:8000/

* `xhr-promise.js`: Promisified XHR request
* `main.js`: Loads the data from `data.txt` and displays it

## .then() and async/await

The `main.js` code has two version of `loadData()` that do the same thing, but each demo different ways of doing it.