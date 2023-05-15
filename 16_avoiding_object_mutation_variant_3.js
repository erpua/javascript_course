const person = {
	"name": "Bob",
	"age": 25
};

const person2 = JSON.parse(JSON.stringify(person));

person2.age = 35;

console.log('person.age => ', person.age); // person.age =>  25
console.log('person2.age => ', person2.age); // person2.age =>  35

// In this case if object has inner object => JSON double converting is working.
// It's created totaly new object with inner objects and with new link to it.