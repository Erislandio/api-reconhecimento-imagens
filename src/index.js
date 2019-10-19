const express = require("express");
const chalk = require("chalk");
const CORS = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const fileUpload = require('express-fileupload')

const app = express();
const PORT = 3000;

app.use(fileUpload())
app.use(express.static('public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(CORS())
app.use(routes)

app.listen(PORT, () => {
  console.log(chalk.blue(`server online na porta http://localhost:${PORT}`));
});
