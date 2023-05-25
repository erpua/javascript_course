let a;
let b;

function myFn() {
	let b;
	a = true;
	console.log("--a-- from myFn() => ", a);
	b = 10;
	console.log("--b-- from myFn()=> ", b);
};

myFn();

console.log("--a-- from global scope => ", a);
console.log("--b-- from global scope => ", b);