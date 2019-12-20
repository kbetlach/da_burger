var connection = require("../config/connection.js");

var orm = {

  selectAll: function(cb) {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  insertOne: function(burger_name, cb) {
    var queryString = "INSERT INTO burgers (burger_name) VALUE (?)";
    console.log(queryString);
    connection.query(queryString, burger_name, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  
  updateDevour: function(id, cb) {
    var queryString = "UPDATE burgers SET ? WHERE ?";
    console.log(queryString);
    connection.query(queryString, [{devoured: true}, {id: id}], function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  updateOrder: function(id, cb) {
    var queryString = "UPDATE burgers SET ? WHERE ?";
    console.log(queryString);
    connection.query(queryString, [{devoured: false}, {id: id}], function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  delete: function(id, cb) {
    var queryString = "DELETE FROM burgers WHERE ?";
    connection.query(queryString, {id}, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

module.exports = orm;