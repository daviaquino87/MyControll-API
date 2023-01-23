import "dotenv/config";
import express from "express";

import { indexRouter } from "./routes/index.routes";
import { errorValidate } from "../../infra/http/middleware/errorValidate";

import "../../container";

const app = express();

app.use(indexRouter);

app.use(errorValidate);
app.listen(process.env.PORT || 3000, () => {
  console.log("application running.");
});
