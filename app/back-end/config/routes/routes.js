import express from "express";
import { productsProcessor } from "../../productsProcessor.js";

const router = express.Router();

router.get("/", (req, res) => {
  //const params = { pageName: "home" };
  const products = productsProcessor.getParsedProducts();
  res.send(products);
  //res.render("index", params);
});
router.get("/mongo-manager", (req, res) => {
  const params = { pageName: "mongo", header: "DESCL Manager" };
  res.send(params);
  //res.render("index", params);
});
router.get("/jobs-manager", (req, res) => {
  const params = { pageName: "jobs", header: "DESCL Manager" };
  res.send(params);
  //res.render("index", params);
});

export default router;
