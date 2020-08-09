const addUserToGroup = require('./group.js');

test('adding a valid user', () => {
  let group = addUserToGroup([], {
    name: "Avery Artichoke",
    email: "avery.artichoke@email.com",
    dateCreated: (new Date()).getTime(),
  });
  expect(group.length).toBe(1);

  let user = group[0];
  expect(user.name).toBe("Avery Artichoke");
});

describe('adding invalid users', () => {
  test('adding null user', () => {
    expect(() => addUserToGroup([])).toThrow('user cannot be null');
  });
  test('adding user without a date created', () => {
    let invalidUser = {
      name: "Billie Butterscotch",
      email: "billie.butterscotch@email.com",
    };
    expect(() => addUserToGroup([], invalidUser)).toThrow('date created required');
  });
  test('adding user without a name', () => {
    let invalidUser = {
      email: "anonymous@email.com",
      dateCreated: (new Date()).getTime(),
    };
    expect(() => addUserToGroup([], invalidUser)).toThrow('name required');
  });
});