/* 
const myCity = {
    city: "New York",
    popular: true,
    country: "USA"
};

console.log(myCity.city);

const myAnotherCity = {
    city: "Las Vegas"
};

console.log(myAnotherCity)

delete myCity.country

console.log(myCity) 
*/

const myCity = {
    city: "New York",
};

// creating value popular: true
myCity['popular'] = true;

console.log(myCity)
// { city: 'New York', popular: true }

const countryPropertyName = 'country';
myCity[countryPropertyName] = 'USA';
console.log(myCity);
// { city: 'New York', popular: true, country: 'USA' }