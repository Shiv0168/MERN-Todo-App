const express = require("express");
const dbConnect = require("./config/dbConnect");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(cors());

dbConnect();

const port = process.env.PORT || 8081;

app.use(express.json());
app.use("/api/todo", require("./routes/todoRoute"));

app.listen(port, () => {
  console.log(`APP LITSEN ON PORT - ${port}`);
});
