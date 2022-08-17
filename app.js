


const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const query_check = require('./search')

const app = express()
app.use(cors())
app.use(express.static(path.join(__dirname, "public")))
app.use(bodyParser.json())


app.get("/api/search/:search", (req, res) => {
  const search = req.params.search
  const result = query_check(search)
  res.json({data: result, msg: "success"})
})

app.listen(2022, "127.0.0.1", () => console.log('active on port 127.0.0.1:2022....'));