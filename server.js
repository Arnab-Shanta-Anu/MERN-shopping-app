const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

//serve frontend
app.use(express.static(path.join(__dirname, "frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend/dist/index.html")),
    (error) => {
      res.status(500).send(error);
    };
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
