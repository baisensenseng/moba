module.exports = options => {
  return async(req, res, next) =>{
    const jwt = require('jsonwebtoken')
    const AdminUser = require('../models/AdminUser')
    const assert = require('http-assert')

    const token = String(req.headers.authorization || '').split(' ').pop()
    // console.log(token,'token2');
    assert(token, 401, '请提供jwttoken')
    const {id} = jwt.verify(token, req.app.get('secret'))
    assert(id, 401, '无效的jwttoken')
    req.user = await AdminUser.findById(id)
    assert(req.user, 401, '用户不存在')
    await next()
  }
}