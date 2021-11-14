// START OF ASYNC-AWAIT SYNTAX

/**
 *
 * @returns {Promise} - a promise that waits for 3 seconds to resolve
 */
function waitForMe() {
	const returnValue = "I am a return value";
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			console.log("Thank you for waiting me!!! :D");
			resolve(returnValue);
		}, 3000);
	});
}

const runUsingSyntacticSugar = async () => {
	try {
		const returnValue = await waitForMe();
		console.log(returnValue);
	} catch (err) {
		return;
	}
};

// runUsingSyntacticSugar();

// console.log(
// 	"Hi! I was ran first even though I was called after `runUsingSyntacticSugar()`"
// );

// END OF ASYNC-AWAIT

// START OF ERROR HANDLING using a try-catch block

function iWillThrowAnError() {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			console.log("I will throw an error after 3 seconds...");
			reject("Oops. I was returned because the promise was rejected");
		}, 3000);
	});
}

const runAsyncFunctionWithError = async () => {
	try {
		await iWillThrowAnError();
	} catch (err) {
		console.log(`${err}`);
	}
};

// runAsyncFunctionWithError();

// END OF ERROR HANDLING using try-catch block

// START OF EXAMPLES USING PROMISES-CALLBACK AND ASYNC-AWAIT

// Example 1: Requesting from an API Server using .catch() and .then()

// we will use an npm library called 'axios' to send HTTP requests to servers
const axios = require("axios");

console.log("Performing a GET request...");
axios
	.get("https://pokeapi.co/api/v2/pokemon/1")
	.then((res) => {
		// prints out the result
		const pokemon = res.data;
		const { name, types } = pokemon;
		console.log(
			`pokemon: ${name}\ntypes: ${types
				.map((type) => type.type.name)
				.join(", ")}\n`
		);
	})
	.catch((err) => {
		// catches the error
		console.log(err);
	});

// console.log(
// 	"Since `axios` tries to resolve the request, it is deferred. Hence this .log() statement is printed first\n"
// );

// Example 2: Requesting from an API Server using async-await syntax and try-catch block
const runGet = async () => {
	try {
		const res = await axios.get("https://pokeapi.co/api/v2/pokemon/16");
		// we use object-destructuring to extract the "data" property in "res"
		const { data } = res;
		const { name, types } = data;
		console.log(
			`pokemon: ${name}\ntypes: ${types
				.map((type) => type.type.name)
				.join(", ")}\n`
		);
	} catch (error) {
		// catches the error
		console.log(err);
	}
};

// runGet();
// console.log("`runGet()` runs in the background");

// Handling multiple promises at the same time using Promise.all()

const waitThemAll = async () => {
	try {
		const pokemon1 = axios.get("https://pokeapi.co/api/v2/pokemon/12");
		const pokemon2 = axios.get("https://pokeapi.co/api/v2/pokemon/29");
		const pokemon3 = axios.get("https://pokeapi.co/api/v2/pokemon/69");

		// By using Promise.all(), it resolves the promises of pokemon1, pokemon2, and pokemon3 in a "synchronous" fashion
		// for a better developer experience (DX)
		const pokemons = await Promise.all([pokemon1, pokemon2, pokemon3]);

		pokemons.forEach((res) => {
			const pokemon = res.data;
			const { name, types } = pokemon;

			// Prints the pokemon name
			// and type which is concatenated usign the '.join()'
			console.log(
				`pokemon: ${name}\ntypes: ${types
					.map((type) => type.type.name)
					.join(", ")}\n`
			);
		});
	} catch (error) {
		console.log(error);
	}
};

// waitThemAll();
