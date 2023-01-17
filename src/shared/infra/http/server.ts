import express from "express";

import { indexRouter } from "./routes/index.routes";

const app = express();

app.use(indexRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log("application running.");
});
