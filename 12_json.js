// JavaScript object notation
/* {
	"userId": 1,
	"id": 2,
	"title": "Test title",
	"status": {
		"completed": true
	}
} */

// JSON.parse() => JSON string from server converts to json object
// JSON.stringify() => JSON object converts to back to string

const post = {
	"title": "My title",
	"postsQty": 5
};

const postStringified = JSON.stringify(post);
console.log("postStringified =>", postStringified);

const postBackeToObject = JSON.parse(postStringified);
console.log('postBackeToObject', postBackeToObject);

