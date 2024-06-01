import express from "express";
import bodyParser from "body-parser";
import "./src/database/knex"; // Import Knex instance
import Router from "./src/routes/router";

const app = express();
const port = 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use(Router); // Use the main router

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
