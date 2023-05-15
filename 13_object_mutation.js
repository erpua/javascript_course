const a = 10;

let b = a;

b = 30; // copy by value

console.log('a', a);

console.log('b', b);

const person = {
	name: "Ben",
	age: 30
};


person.age = 22;
person.isAdult = true;

console.log('person, ', person);
// person,  { name: 'Ben', age: 22, isAdult: true }

// copy mutations

const anotherPerson = {
	"name": "Bob",
	"age": 25
};

const thirdPerson = anotherPerson; //  copy by REFERENCE

thirdPerson.age = 26;
thirdPerson.isAdult = false;

console.log('anotherPerson => ', anotherPerson);
// anotherPerson =>  { name: 'Bob', age: 26, isAdult: false }