function addUserToGroup(group, user) {

  if (!user) {
    throw 'user cannot be null';
  }

  // assert required fields
  if (!user.name) {
    throw 'name required';
  }

  if (!user.email) {
    throw 'email required';
  }

  if (!user.dateCreated) {
    throw 'date created required';
  }

  // assert no empty strings or other invalid values
  if (user.name === "") {
    throw 'name cannot be empty';
  }
  if (user.email === "") {
    throw 'email cannot be empty';
  }
  if (user.dateCreated === 0) {
    throw 'date created cannot be 0';
  }

  group.push(user);
  return group;
}

module.exports = addUserToGroup;