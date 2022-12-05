const express = require("express");
const morgan = require("morgan");
const cors = require('cors')
const app = express();
const PORT = process.env.port || 3001;


const noteRouter = require("./routes/notes.js");


app.use(cors());

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());

app.use("/api/notes", noteRouter);

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
