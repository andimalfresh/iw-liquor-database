const express = require("express");
const app = express();
const port = process.env.PORT || 6661;
const queries = require("./queries");

app.listen(port, console.log(`Telegraphing on ${port}...into the heavens...`));

app.get("/", (req, res) => {
  queries.listAll().then(results => res.send(results));
});
