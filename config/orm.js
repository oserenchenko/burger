var connection = require("connection");

function selectAll(table, cb) {
  var queryString = "SELECT * FROM ??";
  connection.query(queryString, [table], function (err, result) {
    if (err) throw err;
    cb(result);
  });
}

function insertOne(table, colInsert, valInput) {
  var queryString = "INSERT INTO ?? (??) VALUES (?)";
  connection.query(queryString, [table, colInsert, valInput], function (err, result) {
    if (err) throw err;
    cb(result);
  });
}

function updateOne(table, colUpdate, valUpdate, colName, val) {
  var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
  connection.query(queryString, [table, colUpdate, valUpdate, colName, val], function(err, results) {
    if(err) throw err;
    cb(result);
  })
}

var orm = {
  selectAll: selectAll,
  insertOne: insertOne,
  updateOne: updateOne
}

module.exports = orm;