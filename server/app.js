


const express = require('express');
const cors = require('cors');
const path = require('path');
const query_check = require('./search');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));


app.get("/api/search/:search", (req, res) => {
  const search = req.params.search;
  const result = query_check(search);
  setTimeout(() => {
    return res.json({data: result, msg: "success"});
  }, 2000);
});

app.post("/api/user/", (req, res) => {
  const {email, firstname, lastname} = req.body;
  const data = {email, firstname, lastname};
  setTimeout(() => {
    return res.json({msg: "success", data: data});
  }, 8000);
});

app.listen(2022, "127.0.0.1", () => console.log('active on port 127.0.0.1:2022....'));