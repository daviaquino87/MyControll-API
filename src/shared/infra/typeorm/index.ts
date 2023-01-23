import { AppdataSource } from "./data-source";

AppdataSource.initialize().then(() => {
  console.log("create connection");
});
