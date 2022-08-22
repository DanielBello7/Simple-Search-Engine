


const express = require('express');
const query_check = require('../modules/search');
const advanced_query_search = require('../modules/advanced_search');
const router = express.Router();


module.exports = () => {
  
  router.post("/user", (req, res) => {
    const {email, firstname, lastname} = req.body;
    const data = {email, firstname, lastname};
    return res.json({msg: "success", data: data});
  });
  
  
  router.get("/data/ready", (req, res) => {
    return res.json({msg: 'Data ready', success: true});
  });
  
  
  router.get("/search/:search", (req, res) => {
    const search = req.params.search;
    
    const result = query_check(search);
  
    return res.json({data: result, msg: "success"});
  });
  
  
  router.post("/search", async (req, res) => {
    const data = req.body.data;
  
    const search = req.body.search;
  
    if (!data || !search) return res.status(400).json({msg: 'incomplete params'});
  
    const result = await advanced_query_search(data, search);
  
    return res.json({data: result});
  });


  return router;
}