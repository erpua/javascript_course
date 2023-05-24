function myFn(a, b) {
	let c;
	a = a + 1;
	c = a + b;
	console.log('c =>', c);
	return c;
};

myFn(4, 5);