import express from "express";
import router from "./router/router";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.use(express.json());

app.use("/", router);

app.listen(3000, () => {
  console.log("3000...");
});
