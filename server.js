const express = require('express');
const app = express();

app.get("/", function (req, res) {
    let searchQuery = req.query.search;
    res.send("Hello World! You searched for " + searchQuery);
});

app.get("/chocolate", function (req, res) {
    res.send("Mm chocolate :O");
});

app.get("/node", (req, res) => {
    res.send("Welcome Node")
});
app.get("/migracode", (req, res) => {
    res.send("Welcome Migracode")
});


app.listen(3000, () => console.log("Server is up and running at http://localhost:3000"))