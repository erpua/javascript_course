// NOT TO DO
function myFn() {
	a = true;
	// if a is not declared through const, var, let => it automatically
	// declares in global scope
	//that's why there is no mistake
	console.log("-a- from function", a);
};

myFn();

console.log(" -a- from global scope ", a);