<template>
  <div class="login-container">
    <el-card header="请先登陆" class="login-card">
      <el-form @submit.native.prevent="login">
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="model.password"></el-input>
        </el-form-item>
        <el-form-item><el-button type="primary" native-type="submit">登陆</el-button></el-form-item>
        <el-form-item><el-button type="primary" @click="register()">注册</el-button></el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data() {
    return {
      model: {}
    }
  },
  methods: {
    async login(){
      console.log(this.model);
      const res = await this.$http.post('login', this.model)
      console.log(res.data.token);
      localStorage.token = res.data.token;
      this.$router.push('/');
      this.$message({
        type: 'success',
        message: '登陆成功'
      })
    },

    async register() {
      const res = await this.$http.post('register', this.model)
      console.log(res);
    }
  },
}
</script>

<style scoped>
  .login-card{
    width: 25rem;
    margin: 10rem auto;
  }
</style>
