import "dotenv/config";
import express from "express";

import { errorValidate } from "@shared/infra/http/middleware/errorValidate";
import { indexRouter } from "./routes/index.routes";

const app = express();

app.use(indexRouter);

app.use(errorValidate);
app.listen(process.env.PORT || 3000, () => {
  console.log("application running.");
});
