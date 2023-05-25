let a; // global scope
let b; // global scope

function myFn() {
	let b; // local scope
	a = true;
	b = 10;
	console.log("b from myFn", b);
};

myFn();
console.log("a from global scope", a);
console.log("b from global scope", b);