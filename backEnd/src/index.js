const express = require("express");
import cors from "cors";
import bodyParser from "body-parser";
const app = new express();

app.use(cors());
app.use(bodyParser.json());

app.get("/api", (req, res) => {
    res.json({"status": 200, "created": "app created"})
})

app.listen(5000, () => {
    console.log("Backend created");
});