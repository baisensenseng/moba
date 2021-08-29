<template>
  <div class="about">
    <h1>{{id? '编辑' : '新建'}}视频</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="视频">
        <!-- <el-input v-model="model.icon"></el-input> -->
        <video v-if="model.url !== ''" controls="controls" style="height: 500px;">
          <source src="http://localhost:3000/admin/api/videosrc/"   type="video/mp4">
          <!-- <source src="http://moba.xrfclub.com/admin/api/videosrc/"   type="video/mp4"> -->
        </video>
        <el-upload
          v-else
          class="avatar-uploader"
          :action="$http.defaults.baseURL + '/videoupload'"
          :show-file-list="false"
          :on-success="afterUpload"
          :headers="getAuthHeaders()"
        >   
          <i class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props:{
    id: {}
  },

  data(){
    return{
      model:{
        url: '',
      },
    }
  },
  created(){
    this.id && this.fetch();
  },
  mounted() {
  },
  methods: {
    
    afterUpload(res){
      this.$set(this.model, 'url', res.url);
    },

    async save(){
      let res // eslint-disable-line no-unused-vars
      if (this.id) {
        res = await this.$http.put(`rest/videos/${this.id}`, this.model)
      } else {
        res = await this.$http.post('rest/videos', this.model)
      }
      this.$router.push('/videos/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },

    async fetch(){
      const res = await this.$http.get(`rest/videos/video/${this.id}`)
      console.log(res);
      this.model = res.data;
    },

  },
}
</script>

<style>
</style>
