var express = require("express");
var exphbs = require("express-handlebars");
var burger = require("./models/burger.js")

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", function(req, res) {
    connection.query("SELECT * FROM quotes;", function(err, data) {
        if (err) {
            return res.status(500).end();
        }

        res.render("index", { quotes: data });
    });

});

app.post("/api/burgers", function(req, res) {
    connection.query("INSERT INTO burgers (author, quote) VALUES (?, ?)", [req.body.author, req.body.quote], function(err, result) {
        if (err) {
            return res.status(500).end();
        }

        // Send back the ID of the new plan
        res.json({ id: data.insertId });
        console.log({ id: data.insertId });
    });

});

app.delete("/api/quotes/:id", function(req, res) {
    connection.query("DELETE FROM quotes WHERE id = ?", [req.params.id], function(err, result) {
        if (err) {
            // If an error occurred, send a generic server failure
            return res.status(500).end();
        } else if (result.affectedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        res.status(200).end();

    });

});

app.put("/api/quotes/:id", function(req, res) {
    connection.query("UPDATE quotes SET author = ?, quote = ? WHERE id = ?", [req.body.author, req.body.quote, req.params.id], function(err, result) {
        if (err) {
            // If an error occurred, send a generic server failure
            return res.status(500).end();
        } else if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        }
        res.status(200).end();

    });


});



app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});

// module.exports = ?