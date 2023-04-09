
import express from 'express';
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { generateResponse } from "./api/controllers/index.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

app.post("/generate", generateResponse);
app.get("/", (req, res) => {
    console.log('here too')
    res.send('ok')
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
