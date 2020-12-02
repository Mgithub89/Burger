var connection = require("./connection.js");

var orm = {
    selectAll: function (tableName, cb) {
        let queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], (err, data) => {
            if (err) throw err;
            cb(data);
        })
    },
    insertOne: function (tableName, colName, valofCol) {

    },
    updatOne: function (tableName, colName, colValue, conditionCol, conditionVal) {

    }


}








module.exports = orm;