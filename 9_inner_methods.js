const myCity = {
	city: 'New york',
	info: {
		isPopular: true,
		country: 'USA'
	}
};

console.log(myCity.info.isPopular);
// true

delete myCity.info['isPopular'];

console.log(myCity);
// { city: 'New york', info: { country: 'USA' } }

// ------

const name = 'Ievgen';
const postsQty = 23;

/* const userProfile = {
	name: name,
	postsQty: postsQty,
	hasSignedAgreement: false
}; */

const userProfile = {
	name,
	postsQty,
	hasSignedAgreement: false
};