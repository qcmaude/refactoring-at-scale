class Group {

	constructor() {
		this.users = [];
	}

	getUsers() {
		return this.users;
	}

	addUser(user) {
		// Validate the user.
		if (user === null) return;

		// name is a required field and must be a string
		if (typeof(user.name) !== "string") return;

		// email is a required field
		if (typeof(user.email) !== "string") return;

		// date created is a required field
		if (typeof(user.dateCreated) !== "number") return;

		// assert no empty strings or other invalid values
		if (user.name === "") return;
		if (user.email === "") return;

		if (user.name.length === 0) return;
		if (user.email.length === 0) return;

		if (user.dateCreated === 0) return;

		this.users.push(user);
	}
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