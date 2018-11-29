const express = require("express");
const app = express();
const port = process.env.PORT || 6661;
const queries = require("./queries");

app.listen(port, console.log(`Telegraphing on ${port}...into the heavens...`));

app.get("/", (req, res) => {
  queries.listAll().then(results => res.send(results));
});

app.get("/:id", (req, res) => {
  queries.getById(req.params.id).then(results => res.send(results));
});
app.delete("/:id", (req, res) => {
  queries.deleteLiquor(req.params.id).then(res.sendStatus(204));
});
app.post("/", (req, res) => {
  queries.createLiquor(req.body).then(res.sendStatus(201));
});
app.put("/:id", (req, res) => {
  queries
    .updateLiquor(req.params.id, req.body)
    .then(liquor => res.json(liquor));
});
