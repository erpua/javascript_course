// Variant 1: Assign

const person = {
	"name": "Bob",
	"age": 25
};

const person2 = Object.assign({}, person); // creating of new object only in case of regular objects.
//If there is inner object => Object.assign({}, person) does not work

person2.age = 35;

console.log(person.age); // 25

console.log(person2.age); // 35