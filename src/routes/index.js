import express from "express";

import auth from "./auth/index.js";

const router = express.Router();

router.use("/", (req, res) => {
  res.send("Welcome to nagarathar api services");
});
router.use("/auth", auth);

export default router;
