var orm = require("../config/orm.js");

// orm.selectAll("burgers")
const burgers = {
    selectAll: function (cb) {
        orm.selectAll("burgers", (res) => {
            cb(res)
        });
    },

    insertOne: function (colName, valofCol, cb) {
        orm.insertOne("burgers", colName, valofCol, function (res) {
            cb(res);
        });
    },

    updateOne: function (colName, conditionCol, cb) {
        orm.updatOne("burgers", colName, conditionCol, function (res) {
            cb(res);
        });
    }

};

module.exports = burgers;