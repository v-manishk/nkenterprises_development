const express = require("express");
const app = new express();

app.get("/api", (req, res) => {
    res.json({"status": 200, "created": "app created"})
})

app.listen(5000, () => {
    console.log("Backend created");
});