module.exports = app =>{
  const express = require('express')
  const router = express.Router()
  const Category = require('../../modules/category')

  router.post('/categroies', async(req, res) => {
   const model = await Category.create(rep.body)
   res.send(model)
  })


  app.use("/admin/api", router);
}