var orm = require("../config/orm.js");

orm.selectAll("party_name", "parties");

orm.insertOne("pets", "animal_name", "Rachel");

orm.updateOne("buyer_name", "buyer_id", "buyers", "pets");

// module.exports = ?