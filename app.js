const express = require("express");
const morgan = require("morgan");
const cors = require('cors')
const app = express();
const PORT = process.env.port || 3002;


const noteRouter = require("./routes/notes.js");

const corsOptions = {
  origin: 'http://localhost:3001',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());


app.use("/api/notes", noteRouter);

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
