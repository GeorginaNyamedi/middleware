const express = require("express");
const userRouter = require("./routes/users.route");
const { globalMiddleware } = require("./middlewares/globalMiddleware")

const app = express ();

app.use(globalMiddleware);

app.get("/", (req, res) => {
    res
      .status(200)
      .send("Welcome to my server. please use/users to get all users");
});
app.use("/users", userRouter);

app.listen(4000, () => {
    console.log("Server is running on https://localhost:4000")
});