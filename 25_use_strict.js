'use strict';

// BAD PRACTICE
function myFn() {
	a = true; // ReferenceError: a is not defined
	// if a is not declared through const, var, let => it automatically will NOT
	// declares in global scope  ( because of 'use strict'; )
	console.log("-a- from function", a);
};

myFn();

console.log(" -a- from global scope ", a);