const fs = require("fs");

fs.readdir(".", (err, files) => {
	if (err) {
		console.log(`Something went wrong: ${err}`);
		return;
	}
	console.log(files);
	let i = 1;
	for (const file of files) {
		console.log(`${i++}) ${file}`);
	}
});
