const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//serve frontend
app.use(express.static(path.join(__dirname, "./frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./frontend/dist/index.html")),
    (error) => {
      res.status(500).send(error);
    };
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
