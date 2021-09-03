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
    const queryOptions = {}
    if (req.Model.modelName === 'Category') {
      queryOptions.populate = 'parent'
    }
    const items = await req.Model.find().setOptions(queryOptions).limit(100)
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
    assert(token, 401, '请提供jwttoken')
    const {id} = jwt.verify(token, req.app.get('secret'))
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
    const file = req.file
    // // file.url = `http://moba.xrfclub.com/uploads/${file.filename}`
    file.url = `${file.filename}`
    res.send(file)
  })

  // 视频资源url详情
  router.get('/video/:id', async (req, res) => {
    const model = await req.Model.findById(req.params.id)
    res.send(model)
    // 视频资源url详情
    app.get('/admin/api/videosrc', async (req, res2) => {
      console.log(model);
      const videoPath =  `${__dirname} +  /../../uploads/${model.url}`;
      fs.createReadStream(videoPath).pipe(res2);
    })
  })
  
  const alipay_f2f = require('alipay-ftof')
  router.post("/callback", (req, res) => {
    
      /* 请勿改动支付宝回调过来的post参数, 否则会导致验签失败 */
      var signStatus = alipay_f2f.verifyCallback(req.body);
      if(signStatus === false) {
          return res.error("回调签名验证未通过");
      }
      /* 商户订单号 */
      var noInvoice = req.body["out_trade_no"];
      /* 订单状态 */
      var invoiceStatus = req.body["trade_status"];

      // 支付宝回调通知有多种状态您可以点击已下链接查看支付宝全部通知状态
      // https://doc.open.alipay.com/docs/doc.htm?spm=a219a.7386797.0.0.aZMdK2&treeId=193&articleId=103296&docType=1#s1
      if(invoiceStatus !== "TRADE_SUCCESS") {
          return res.send("success");
      }

      /* 一切都验证好后就能更新数据库里数据说用户已经付钱啦 */
      req.database.update(noInvoice, { pay: true }).then(result => res.send("success")).catch(err => res.catch(err));
  });

  // 登陆
  app.post('/admin/api/login', async(req, res) => {
    const { username, password } = req.body

    // 1.根据用户名找用户
    const alluser = await AdminUser.find()
    const user = await AdminUser.findOne({username}).select('+password')
    assert(user, 422, '用户不存在')

    // 2.校验密码
    const isValid = require('bcryptjs').compareSync(password, user.password)
    assert(isValid, 422, '用户密码错误')

    // 3.返回token
    const token = jwt.sign({ id: user._id}, app.get('secret'))
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