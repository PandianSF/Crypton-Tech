const express = require("express");
const app = express();
const fs = require("fs");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(express.json());

app.post("/csv", upload.single("file"), (req, res) => {
  const fileDate = req.file.buffer.toString();
  const arr = fileDate.split("\n");
  const keys = arr[0].split(",");
  const values = arr[1].split(",");
  const obj = {};
  keys.forEach((v, i) => {
    obj[keys[i]] = values[i];
  });
  console.log(obj);
  res.send(obj);
});

app.listen(3000, () => console.log("Server Started"));
