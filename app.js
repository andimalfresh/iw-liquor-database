const express = require("express");
const app = express();
const port = process.env.PORT || 6661;

app.listen(port, console.log(`Telegraphing on ${port}... Hi Carla!`));

app.get("/", (req, res) => {
  res.send("Be sure when you make the DataBase to add Carla in it");
});
