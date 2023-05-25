
const a = 5; // Global scope

function myFn() {
	// local scope of myFn
	function innerFn() {
		// local scope of innerFn
		console.log(' --a-- from inner function from myFn =>', a);
	};
	innerFn();

	return;
};

myFn();