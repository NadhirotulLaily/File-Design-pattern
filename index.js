const express = require('express');
const bodyParser = require('body-parser');
require("dotenv").config();
const movies = require('./router/movies');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/movies', movies);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

