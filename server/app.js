


const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require('./routes/index.routes');

const app = express();

const whitelist = [
  'http://localhost:3000', 
  'https://find-search-application.web.app'
]

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", routes());


module.exports = app;