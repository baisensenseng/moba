const AdminUser = require('../../models/AdminUser')

module.exports = app =>{
  const express = require('express')
  const jwt = require('jsonwebtoken')
  const AdminUser = require('../../models/AdminUser')
  const assert = require('http-assert')

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
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })

  // 删除
  router.delete('/:id', async(req, res) => {
    await req.Model.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    })
  })

  // 资源列表
  router.get('/', async(req, res) => {
    const queryOptions = {}
    if (req.Model.modelName === 'Category') {
      queryOptions.populate = 'parent'
    }
    // const items = await req.Model.find().populate('parent').limit(10)
    const items = await req.Model.find().setOptions(queryOptions).limit(10)
    res.send(items)
  })

  // 资源列表
  app.post('/admin/api/token', async (req, res) => {
    // res.send('ok')
    const token = String(req.headers.authorization || '').split(' ').pop()
    assert(token, 401, '请提供jwttoken')
    const {id} = jwt.verify(token, req.app.get('secret'))
    assert(id, 401, '无效的jwttoken')
  });

  
  // 资源详情
  router.get('/:id', async (req, res) => {
    console.log(req, res);
    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })

  // 登陆授权中间件
  const authMiddleware = require('../../middleware/auth')
  // 获取模型中间件
  const resourceMiddleware = require('../../middleware/resource')

  app.use("/admin/api/rest/:resource", authMiddleware(), resourceMiddleware(),router);

  const multer = require('multer')
  const upload = multer({ dest: __dirname + '/../../uploads' })
  app.post('/admin/api/upload', upload.single('file'), authMiddleware(), async (req, res) => {
    const file = req.file
    file.url = `http://localhost:3000/uploads/${file.filename}`
    res.send(file)
  })

  // 登陆
  app.post('/admin/api/login', async(req, res) => {
    const { username, password } = req.body

    // 1.根据用户名找用户
    
    const user = await AdminUser.findOne({username}).select('+password')
    assert(user, 422, '用户不存在')
    // if (!user) {
    //   return res.status(422).send({
    //     message: '用户不存在'
    //   })
    // }

    // 2.校验密码
    const isValid = require('bcrypt').compareSync(password, user.password)
    console.log(isValid);
    assert(isValid, 422, '用户密码错误不存在')
    // if (!isValid) {
    //   return res.status(422).send({
    //     message: '密码错误'
    //   })
    // }

    // 3.返回token
    const token = jwt.sign({ id: user._id}, app.get('secret'))
    console.log(token);
    res.send({token})
  });

  // 错误处理函数
  app.use(async(err, req, res, next)=>{
    res.status(err.statusCode || 500).send({
      message: err.message
    })
    await next()
  })
}