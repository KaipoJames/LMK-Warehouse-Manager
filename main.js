import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import router from "./app/config/routes/routes.js";

const app = express();

app.set("view engine", "ejs");
app.use("/", router);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(process.env.PORT || 5000, (err, res) => {
  if (err) console.error(err, res);
  console.log("Server is listening on port 5000 at: http://localhost:5000");

  mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  }).then(() => {
      console.log("Connected to LMK Warehouse Database!"); 
  },
  err => { console.log(err) },
  );
});
