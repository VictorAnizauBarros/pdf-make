const db = require("../config/db");

const User = {
  getAllUsers: (search, callback) => {
    let sql = "SELECT * FROM users";
    let params = [];
    if (search) {
      sql += " WHERE name LIKE ?";
      params.push(`%${search}%`);
    }
    db.query(sql, params, (err, results) => {
      if (err) throw err;
      callback(results);
    });
  },

  getAllUserstoPDF: (search) => {
    let sql = "SELECT * FROM users";
    let params = [];
    if (search) {
      sql += " WHERE name LIKE ?";
      params.push(`%${search}%`);
    }
    return new Promise((resolve, reject) => {
      db.query(sql, params, (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      });
    });
  },
};
module.exports = User;
