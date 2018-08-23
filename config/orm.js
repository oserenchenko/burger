var connection = require("../config/connection.js");

function selectAll(table, cb) {
  var queryString = "SELECT * FROM ??";
  connection.query(queryString, [table], function (err, result) {
    if (err) throw err;
    cb(result);
  });
}

function insertOne(table, colInsert, valInput, cb) {
  var queryString = "INSERT INTO ?? (??) VALUES (?)";
  connection.query(queryString, [table, colInsert, valInput], function (err, result) {
    if (err) throw err;
    cb(result);
  });
}

function updateOne(table, colUpdate, valUpdate, colName, val, cb) {
  var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
  connection.query(queryString, [table, colUpdate, valUpdate, colName, val], function(err, result) {
    if(err) throw err;
    cb(result);
  });
}

var orm = {
  selectAll: selectAll,
  insertOne: insertOne,
  updateOne: updateOne
}

module.exports = orm;