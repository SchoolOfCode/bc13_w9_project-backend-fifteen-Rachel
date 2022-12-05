import express from 'express'
import logger from 'morgan'
import cors from 'cors'
import codeRouter from './routes/notes.js'

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use("/api/notes", codeRouter);

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
