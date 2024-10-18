import db from "./db/connection.js" // let db = mongoose.connection
import petRouter from "./routes/pets.js"
import express  from 'express';
import logger from "morgan";
import dotenv from 'dotenv';
import chalk from "chalk";
import cors from 'cors';
dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

//TBU: Add mor middleware (cors, express.JSON)

app.use(logger("dev"));
app.use(express.json());
app.use(cors());

// ^^^^^^^ Routes ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
app.use('/pets', petRouter)
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

db.on('connected', () => {
    console.clear();
    console.log(chalk.green("Connected to MongoDB"));
});

app.listen(PORT, () => {
  console.log(`The express app is ready on port ${PORT}!`);
});