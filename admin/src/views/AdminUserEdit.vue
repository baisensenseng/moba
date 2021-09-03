<template>
  <div class="about">
    <h1>{{id? '编辑' : '新建'}}管理员</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="用户名">
        <el-input v-model="model.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type='' v-model="model.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
    <el-form label-width="120px" @submit.native.prevent="alipay">
      <el-form-item>
        <el-button type="primary" native-type="submit">支付</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import alipayf2f from 'alipay-ftof';

export default {
  props:{
    id: {}
  },

  data(){
    return{
      model:{

      },
    }
  },
  methods: {

    async save(){
      let res // eslint-disable-line no-unused-vars
      if (this.id) {
        res = await this.$http.put(`rest/admin_users/${this.id}`, this.model)
      } else {
        res = await this.$http.post('rest/admin_users', this.model)
      }
      this.$router.push('/admin_users/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },

    async fetch(){
      const res = await this.$http.get(`rest/admin_users/${this.id}`)
      this.model = res.data;
    },

    async alipay(){
      var alipay_f2f = new alipayf2f(require("./config"));
      alipay_f2f.createQRPay({
          tradeNo: "123",      // 必填 商户订单主键, 就是你要生成的
          subject: "女装",      // 必填 商品概要
          totalAmount: 0.5,    // 必填 多少钱
          body: "黑丝吊带小蜡烛", // 可选 订单描述, 可以对交易或商品进行一个详细地描述，比如填写"购买商品2件共15.00元"
          timeExpress: 5       // 可选 支付超时, 默认为5分钟
      }).then(result => {
          console.log(result) // 支付宝返回的结果
      }).catch(error => console.error(error));

    },
    
  },

  created(){
    this.id && this.fetch();
  }
}
</script>
