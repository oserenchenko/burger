var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },

  create: function(cb) {
    orm.insertOne("burgers", colInsert, valInput, function(res) {
      cb(res);
    });
  },

  update: function(cb) {
    orm.updatedOne("burgers", colUpdate, valUpdate, colName, val, function(res) {
      cb(res);
    });
  }
}

module.exports= burger;