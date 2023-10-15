const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = new express();

app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(bodyParser.json());


app.get("/api", (req, res) => {
    res.json({"status": 200, "created": "app created"})
})

app.listen(5000, () => {
    console.log("Backend created");
});