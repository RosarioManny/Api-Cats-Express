import dotenv from 'dotenv';
dotenv.config();
import express  from 'express';
import db from "./db/connection.js" // let db = mongoose.connection
import chalk from "chalk";
import logger from "morgan";

const app = express();
const PORT = process.env.PORT || 3000;

//TBU: Add mor middleware (cors, express.JSON)
app.use(logger("dev"));
app.use(express.json());

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// TBU: Routes go here
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

db.on('connected', () => {
    console.clear();
    console.log(chalk.magenta("Connected to MongoDB"));
});

app.listen(PORT, () => {
  console.log(`The express app is ready on port ${PORT}!`);
});