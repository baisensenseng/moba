module.exports = app =>{
  const express = require('express')
  const jwt = require('jsonwebtoken')
  const AdminUser = require('../../models/AdminUser')
  const User = require('../../models/User')
  const Video = require('../../models/Video')
  const assert = require('http-assert')

  const router = express.Router({
    mergeParams: true
  })

  // 新增
  router.post('/', async(req, res) => {
   const model = await req.Model.create(req.body)
   res.send(model)
  })

  // 删除
  router.delete('/:id', async(req, res) => {
    await req.Model.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    })
  })

  // 修改
  router.put('/:id', async(req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })

  // 资源列表
  router.get('/', async(req, res) => {
    // console.log(req,'资源列表资源列表资源列表资源列表');
    const queryOptions = {}
    if (req.Model.modelName === 'Category') {
      queryOptions.populate = 'parent'
    }
    const items = await req.Model.find().setOptions(queryOptions).limit(100)
    // console.log('itemsitemsitemsitems',items);
    res.send(items)
  })

  // 注册
  app.post('/admin/api/register', async (req, res) => {
    const user = await AdminUser.create({
      username: req.body.username,
      password: req.body.password,
    })
    res.send(user);
  });

  // 切换页面调用token验证接口
  app.post('/admin/api/checktoken', async (req, res) => {
    const token = String(req.headers.authorization || '').split(' ').pop()
    // console.log(token, 'token');
    assert(token, 401, '请提供jwttoken')
    // console.log(jwt, 'jwt');
    const {id} = jwt.verify(token, req.app.get('secret'))
    // console.log(id, 'id');
    res.send('验证成功');
    // assert(id, 401, '无效的jwttoken')
  });

  
  // 资源详情
  router.get('/:id', async (req, res) => {
    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })



  // 登陆授权中间件
  const authMiddleware = require('../../middleware/auth')
  // 获取模型中间件
  const resourceMiddleware = require('../../middleware/resource')

  app.use("/admin/api/rest/:resource", resourceMiddleware(),router);

  
  const multer = require('multer')

  // 通过 filename 属性定制
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `${__dirname} +  /../../uploads`);    // 保存的路径，备注：需要自己创建
    },
    filename: function (req, file, cb) {
      // console.log();
      cb(null, file.originalname);  
    }
  });
  // 通过 storage 选项来对 上传行为 进行定制化
  const upload = multer({ storage: storage })


  app.post('/admin/api/upload', upload.single('file'), authMiddleware(), async (req, res) => {
    const file = req.file
    file.url = `http://moba.xrfclub.com/uploads/${file.filename}`
    // file.url = `http://localhost:3000/uploads/${file.filename}`
    res.send(file)
  })


  // 视频上传
  const fs = require('fs')

  app.post('/admin/api/videoupload', upload.single('file'), authMiddleware(), async (req, res) => {
    // console.log(req);
    // console.log(req.params);
    // console.log(req.query);
    const file = req.file
    // // file.url = `http://moba.xrfclub.com/uploads/${file.filename}`
    file.url = `${file.filename}`
    res.send(file)
  })

  // 视频资源url详情
  router.get('/video/:id', async (req, res) => {
    // console.log(req.params);
    const model = await req.Model.findById(req.params.id)
    // console.log(model);
    res.send(model)
    // const videoPath =  `${__dirname} +  /../../uploads/小片片说大片 2021-08-15 17_27.mp4`;
    // console.log(model);
    // var stream = fs.createReadStream(videoPath)
    //   .on("open", function() {
    //     stream.pipe(res);
    //   }).on("error", function(err) {
    //     res.end(err);
    //   });
    // 视频资源url详情
    app.get('/admin/api/videosrc', async (req, res2) => {
      console.log(res2);
      console.log(model);
      const videoPath =  `${__dirname} +  /../../uploads/${model.url}`;
      var stream = fs.createReadStream(videoPath)
        .on("open", function() {
          stream.pipe(res2);
        })
    })
  })

  
  

  // 登陆
  app.post('/admin/api/login', async(req, res) => {
    const { username, password } = req.body

    // 1.根据用户名找用户
    const alluser = await AdminUser.find()
    // console.log(alluser);
    const user = await AdminUser.findOne({username}).select('+password')
    assert(user, 422, '用户不存在')

    // 2.校验密码
    const isValid = require('bcryptjs').compareSync(password, user.password)
    // console.log(isValid);
    assert(isValid, 422, '用户密码错误')

    // 3.返回token
    const token = jwt.sign({ id: user._id}, app.get('secret'))
    // console.log(token);
    res.send({token})
  });

  // 错误处理函数
  app.use(async(err, req, res, next)=>{
    res.status(err.statusCode || 500).send({
      message: err.message
    })
    await next()
  })

  // AdminUser.db.dropCollection('register')
}