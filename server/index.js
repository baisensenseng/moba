const express = require("express")

const app = express()

app.use(require('cors')())
app.use(express.json())

require('./plugins/db')(app) // 引用数据库
require('./routes/admin')(app)

app.listen(3000, ()=>{
  console.log('APP listen on port 3000');
  console.log('http://locahost:3000');
})