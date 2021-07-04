module.exports = app =>{
  const express = require('express')
  const router = express.Router({
    mergeParams: true
  })
  // const req.Model = require('../../modules/req.Model')

  // 新增
  router.post('/', async(req, res) => {
   const model = await req.Model.create(req.body)
   res.send(model)
  })

  // 修改
  router.put('/:id', async(req, res) => {
    console.log(req, res,'putputputputputputputputputputputputputputputputputputputputputput');
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })

  // 删除
  router.delete('/:id', async(req, res) => {
    console.log(req, res,'putputputputputputputputputputputputputputputputputputputputputput');
    await req.Model.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    })
  })

  // 分类列表
  router.get('/', async(req, res) => {

    const items = await req.Model.find().populate('parent').limit(10)
    res.send(items)
  })

  router.get('/:id', async (req, res) => {
    console.log(req, res);
    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })

  

  app.use("/admin/api/rest/:resource", async(req, res, next) => {
    const modelName = require('inflection').classify(req.params.resource)
    req.Model = require(`../../models/${modelName}`)
    next()
  } ,router);
}