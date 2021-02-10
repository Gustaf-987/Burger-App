var connection = require("./connection.js");

var orm = {
    selectAll: function(col_name, table_name) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [col_name, table_name], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function(whatToSelect, table, orderCol) {
        var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
        console.log(queryString);
        connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
        var queryString =
            "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

        connection.query(
            queryString, [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
            function(err, result) {
                if (err) throw err;
                console.log(result);
            }
        );
    }
};

module.exports = orm;