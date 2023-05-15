const person = {
	"name": "Bob",
	"age": 25
};

const person2 = { ...person }; // ... => spread operator

person2.name = "Anna";

console.log('person', person); // person { name: 'Bob', age: 25 }
console.log('person2 => ', person2); // person2 =>  { name: 'Anna', age: 25 }

// SPREAD operator does not work for for inner objects as well.
// inner objects are not going to be changed