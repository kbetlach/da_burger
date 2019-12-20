var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },

  insertOne: function(burger_name, cb) {
    orm.insertOne(burger_name, function(res) {
      cb(res);
    });
  },

  updateDevour: function(id, cb) {
    orm.updateDevour(id, function(res) {
      cb(res);
    });
  },  
  
  updateOrder: function(id, cb) {
    orm.updateOrder(id, function(res) {
      cb(res);
    });
  },

  delete: function(id, cb) {
    orm.delete(id, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;