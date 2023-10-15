const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// app.use(express.static(path.resolve(__dirname, '../client/build')));

const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.json());

app.get('/api', async (req, res) => {
    await res.status(200).json({"status": 200, "created": "app created"});
})

app.listen(PORT, () => {
    console.log("Backend created");
});