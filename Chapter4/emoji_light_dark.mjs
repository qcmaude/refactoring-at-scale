import _ from 'underscore';

class Emoji {
  
  constructor() {
    this.emoji = [];
    this.MAX_SET_SIZE = 10;
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
      if (resultSet.length >= this.MAX_SET_SIZE) break;
      if (e.name.search(nameRegex) > -1) resultSet.push(e);
    }
    return resultSet;
  }

  // This is our abstraction
  find(nameRegex) {
    var oldResult = this.search(nameRegex);
    if (!SearchRewrite.shouldDoubleRead()) {
      return oldResult;
    }
    var newResult = this.searchPaginated(nameRegex);
    SearchRewrite.compareOutput(oldResult, newResult);
    if (SearchRewrite.isLightMode()) return newResult;
    // By default, always return the old result.
    return oldResult;
  }
}

class SearchRewrite {

  // This is a helper function for determining the status of
  // our refactor based off of the handful of feature flags
  // we've well-defined
  static shouldDoubleRead() {
    if (Features.enabled("search_rewrite_double_read")) {
      return true;
    }
    return false;
  }

  static isLightMode() {
    if (Features.enabled("search_rewrite_light_mode")) {
      return true;
    }
    return false;
  }

  static compareOutput(oldOutput, newOutput) {
    if (_.isEqual(oldOutput, newOutput)) return;
    Logger.log("search_rewrite_mismatch",
      {"old": oldOutput, "new": newOutput});
  }
}

// Very simple feature flag class.
class Features {

  static set = [];

  static add(featureName, enabled) {
    this.set[featureName] = enabled;
  }

  static enable(featureName) {
    this.set[featureName] = true;
  }

  static disable(featureName) {
    this.set[featureName] = false;
  }

  static enabled(featureName) {
    return this.set[featureName];
  }
}

// Very simple logger class.
class Logger {
  static log(message, details) {
    console.log(message, details);
  }
}

var emoji = new Emoji();
emoji.add({name: "cloud", image: "cloud.png"});
emoji.add({name: "sun", image: "sun.png"});
emoji.add({name: "lightning", image: "lightning.png"});

for(var k = 0; k < 100; k++) {
  emoji.add({name: `rain${k}`, image: `rain${k}.png`});
}

// Let's enable reading from both sources.
Features.add("search_rewrite_double_read", true);

// Let's add the light reading feature to the feature set.
Features.add("search_rewrite_light_mode", true);
var lightModeResults = emoji.find(/r(.)+/);
console.log(lightModeResults);

// Now let's return the old results.
Features.disable("search_rewrite_light_mode");
var darkModeResults = emoji.find(/r(.)+/);
console.log(darkModeResults);