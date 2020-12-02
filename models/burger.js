var orm = require("../config/orm.js");

// orm.selectAll("burgers")
const burgers = {
    selectAll: function (cb) {
        orm.selectAll("burgers", (res) => {
            cb(res)
        });
    },
    // insertOne: orm.insertOne(""),
    // updateOne: orm.updatOne("")
}

module.exports = burgers;