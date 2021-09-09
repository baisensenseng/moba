const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  title: { type: String },
  time: { type: String },
  videourl: { type: String },
  // categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }],
  body: { type: String },
},{
  timestamps: true
})

module.exports = mongoose.model('Onlinevideo', schema)