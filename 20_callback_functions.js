// Functions must be single purposed
// Functions must bu "Pure functions"

/* function anotherFunction() {

	console.log('Callback function from another function' + '\n' + 'qwe');
};

function fnWithCallback(callBackFunction) {
	callBackFunction();
};

fnWithCallback(anotherFunction); */

// -----------

function printMyName() {
	console.log('Ievgen');
	return;
};

console.log('Start');

setTimeout(printMyName, 1000);


