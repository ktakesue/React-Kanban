const bookshelf = require("./bookshelf");

class Card extends bookshelf.Model {
  get tableName() {
    return "card";
  }
  get hasTimestamps() {
    return true;
  }
}

module.exports = Card;
