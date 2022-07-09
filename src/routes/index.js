import express from "express";

import auth from "./auth/index.js";

const router = express.Router();

router.use("/auth", auth);
router.use("/", (req, res) => {
  res.send("Welcome to nagarathar api services");
});

export default router;
