// Window => browsers
// global => node.js
console.log(Window.innerWidth);
// 1920 from browser

/*
> global

<ref *1> Object [global] {
	global: [Circular *1],
	queueMicrotask: [Function: queueMicrotask],
	clearImmediate: [Function: clearImmediate],
	setImmediate: [Function: setImmediate] {
		[Symbol(nodejs.util.promisify.custom)]: [Getter]
	},
	structuredClone: [Function: structuredClone],
	clearInterval: [Function: clearInterval],
	clearTimeout: [Function: clearTimeout],
	setInterval: [Function: setInterval],
	setTimeout: [Function: setTimeout] {
		[Symbol(nodejs.util.promisify.custom)]: [Getter]
	},
	atob: [Function: atob],
	btoa: [Function: btoa],
	performance: [Getter/Setter],
	fetch: [AsyncFunction: fetch],
	crypto: [Getter]
}

*/

// globalThis => unique object

// globalThis.innerHeight;
// 1920