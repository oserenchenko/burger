var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },

  create: function(colInsert, valInput, cb) {
    orm.insertOne("burgers", colInsert, valInput, function(res) {
      cb(res);
    });
  },

  update: function(colUpdate, valUpdate, colName, val, cb) {
    orm.updateOne("burgers", colUpdate, valUpdate, colName, val, function(res) {
      cb(res);
    });
  }
}

module.exports = burger;