import express from "express";
import User from "../user/scema.js";

const router = express.Router();

router.post("/login", login);

async function signup() {
  // const user = await User.deleteMany();
  // console.log("first user saved", user);
}

async function login(req, res) {
  const { email, password } = req.body.data;

  if (!email || !password) {
    res.status(401).send({ errorMsg: "email and password is required" });
  }

  const user = await User.findOne({
    email: { $regex: new RegExp(`^\\s*${email}\\s*$`, "i") },
  });

  if (user) {
    if (atob(user.password) === password) {
      res.status(200).send({ token: "" });
    } else {
      res.status(401).send({ errorMsg: "Password is incorrect" });
    }
  } else {
    res.status(401).send({ errorMsg: "Email is incorrect" });
  }
}

export default router;
