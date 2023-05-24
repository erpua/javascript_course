const personOne = {
	name: 'Bob',
	age: 21
};

function increasePersonAge(person) {
	person.age += 1;
	console.log(person);
	return person;
};

increasePersonAge(personOne); // { name: 'Bob', age: 22 }

// Inside of functions is not recommended to mutate external objects