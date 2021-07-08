var url = "mongodb://localhost:27017/node-vue-moba";

module.exports = app => {
  const mongoose = require('mongoose')
  mongoose.connect( url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Connection Successful"))
  .catch(err => console.log(err));
}