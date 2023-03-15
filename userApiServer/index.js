const express = require("express");
const app = express();
app.use(express.json());
const users = [];

// To create users
app.post("/users", (req, res) => {
  try {
    users.forEach((user) => {
      if (user.name === req.body.name) {
        throw new Error("User already Present");
      }
    });
    const userId = Math.floor(Math.random() * 100);
    const createdOn = new Date();
    const modifiedOn = new Date();
    const newUser = { ...req.body, userId, createdOn, modifiedOn };
    users.push(newUser);
    res.send({
      status: "SUCCESS",
      data: newUser,
      message: "User Created Successfully",
    });
  } catch (e) {
    res.send({
      status: "ERROR",
      message: "User not created",
    });
  }
});

// To get users lists
app.get("/users", (req, res) => {
  res.send({
    status: "SUCCESS",
    data: users,
  });
});

// To remove existing users by userId
app.delete("/users/:userId", (req, res) => {
  const userId = parseInt(req.params.userId);
  const removedIndex = users.findIndex((v) => v.userId === userId);
  console.log(removedIndex);
  if (removedIndex != -1) {
    users.splice(removedIndex, 1);
    res.send({
      status: "SUCCESS",
      message: "User removed successfully",
    });
  } else {
    res.send({
      status: "ERROR",
      message: "User data not found",
    });
  }
});

// To update existing users by userId
app.put("/users/:userId", (req, res) => {
  const userId = parseInt(req.params.userId);
  const updateData = users.find((v) => v.userId === userId);
  if (updateData) {
    updateData.name = req.body.name;
    updateData.modifiedOn = new Date();

    res.send({
      status: "SUCCESS",
      message: "user updated successfully",
    });
  } else {
    res.send({
      status: "ERROR",
      message: "User data not found",
    });
  }
});

app.listen(3000, () => console.log("server started"));
