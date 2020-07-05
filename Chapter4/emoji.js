class Emoji {

  constructor() {
    this.emoji = [];
    this.MAX_SET_SIZE = 50;
  }

  add(emoji) {
    this.emoji.push(emoji);
  }

  // This is our old implementation
  search(nameRegex) {
    var resultSet = this.emoji.filter((e) => (e.name.search(nameRegex) > -1));
	  if (resultSet.length > this.MAX_SET_SIZE) {
      resultSet = resultSet.slice(0, this.MAX_SET_SIZE);
    }
    return resultSet;
  }

  // This is our new implementation
  searchPaginated(nameRegex) {
    var resultSet = [];
    for(var i = 0; i < this.emoji.length; i++) {
      var e = this.emoji[i];
      if (resultSet.length > this.MAX_SET_SIZE) break;
      if (e.name.search(nameRegex) > -1) resultSet.push(e);
    }
    return resultSet;
  }
}

var emoji = new Emoji();
emoji.add({name: "cloud", image: "cloud.png"});
emoji.add({name: "sun", image: "sun.png"});
emoji.add({name: "lightning", image: "lightning.png"});

for(var k = 0; k < 100; k++) {
  emoji.add({name: `rain${k}`, image: `rain${k}.png`});
}

console.time('Unpaginated results');
var unpaginatedResults = emoji.search(/r(.)+/);
console.timeEnd('Unpaginated results');

console.time('Paginated results');
var paginatedResults = emoji.searchPaginated(/r(.)+/);
console.timeEnd('Paginated results');