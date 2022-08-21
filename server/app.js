


const express = require('express');
const cors = require('cors');
const path = require('path');
const session = require('express-session');
const query_check = require('./search');

const app = express();

app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000']
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

app.use(session({
  resave: false,
  secret: 'development',
  saveUninitialized: true,
  cookie: { 
    sameSite: 'strict',
    maxAge: 1000 * 60 * 60 * 24 
  }
}));


app.use((req, res, next) => {
  if(req.url === "/favicon.ico") return res.end();
  return next();
});


app.use((req, res, next) => {
  if(req.session.visits) req.session.visits++;
  else req.session.visits = 1;
  console.log(req.session);
  return next();
});


app.post("/api/user/", (req, res) => {
  const {email, firstname, lastname} = req.body;
  const data = {email, firstname, lastname};
  setTimeout(() => {
    return res.json({msg: "success", data: data});
  }, 8000);
});


app.post("/api/data/upload", (req, res) => {
  const repo = req.body.repo;

  setTimeout(() => {
    if (!repo) return res.json({msg: 'Error', success: false});
    return res.json({msg: 'Data stored', success: true});
  }, 3000);
});


app.get("/api/search/:search", (req, res) => {
  const search = req.params.search;
  
  const result = query_check(search);

  setTimeout(() => {
    return res.json({data: result, msg: "success"});
  }, 2000);
});


app.listen(2022, "127.0.0.1", () => {
  console.log('active on port 127.0.0.1:2022....');
});