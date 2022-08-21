


const express = require('express');
const cors = require('cors');
const path = require('path');
const query_check = require('./modules/search');
const advanced_query_search = require('./modules/advanced_search');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));


app.use((req, res, next) => {
  if(req.url === "/favicon.ico") return res.end();
  return next();
});


app.post("/api/user/", (req, res) => {
  const {email, firstname, lastname} = req.body;
  const data = {email, firstname, lastname};
  setTimeout(() => {
    return res.json({msg: "success", data: data});
  }, 8000);
});


app.get("/api/data/ready", (req, res) => {
  setTimeout(() => {
    return res.json({msg: 'Data ready', success: true});
  }, 3000);
});


app.get("/api/search/:search", (req, res) => {
  const search = req.params.search;
  
  const result = query_check(search);

  setTimeout(() => {
    return res.json({data: result, msg: "success"});
  }, 2000);
});


app.post("/api/search", async (req, res) => {
  const data = req.body.data;

  const search = req.body.search;

  if (!data || !search) return res.status(400).json({msg: 'incomplete params'});

  const result = await advanced_query_search(data, search);

  return res.json({data: result});
});


app.listen(2022, "127.0.0.1", () => {
  console.log('active on port 127.0.0.1:2022....');
});