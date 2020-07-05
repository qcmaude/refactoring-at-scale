class Group {

	constructor() {
		this.users = [];
	}

	getUsers() {
		return this.users;
	}

	addUser(user) {
		if (!isValidUser(user)) return;
		this.users.push(user);
	}
}

function isValidUser(user) {
	// Validate the user.
	if (user === null) return false;

	// name is a required field and must be a string
	if (typeof(user.name) !== "string") return false;

	// email is a required field
	if (typeof(user.email) !== "string") return false;

	// date created is a required field
	if (typeof(user.dateCreated) !== "number") return false;

	// assert no empty strings or other invalid values
	if (user.name === "") return false;
	if (user.email === "") return false;

	if (user.name.length === 0) return false;
	if (user.email.length === 0) return false;

	if (user.dateCreated === 0) return false;

	return true;
}

var group = new Group();

group.addUser({
	name: "Avery Artichoke",
	email: "avery.artichoke@email.com",
	dateCreated: (new Date()).getTime(),
});
group.addUser({
	name: "Billie Butterscotch",
	email: "billie.butterscotch@email.com",
});
group.addUser({
	email: "no.one.in.particular@email.com",
	dateCreated: (new Date()).getTime(),
});
group.addUser({
	name: "Charlie Cherry",
	dateCreated: (new Date()).getTime(),
});

console.log(group.getUsers());