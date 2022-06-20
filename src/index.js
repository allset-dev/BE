import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import { PORT, MONGOOSE_AUTH } from "../config/env-variables.js";
import { killPort } from "../config/kill-port.js";
import routes from "./routes/index.js";

if (!MONGOOSE_AUTH) {
  console.error("Error: No MONGOOSE_AUTH set in env file");
}

killPort();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/api", routes);

mongoose
  .connect(MONGOOSE_AUTH, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
