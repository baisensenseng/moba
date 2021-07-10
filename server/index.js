const express = require("express")

const app = express()

// 全局属性
app.set('secret', 'asdasd')

app.use(require('cors')())
app.use(express.json())
app.use('/uploads', express.static(__dirname + '/uploads'))

require('./plugins/db')(app) // 引用数据库
require('./routes/admin')(app)

app.listen(3000, ()=>{
  console.log('APP listen on port 3000');
  console.log('http://locahost:3000');
})