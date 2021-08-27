<template>
  <div class="about">
    <h1>视频列表</h1>
    <el-table :data="videos">
      <el-table-column prop="_id" label="ID" width="230"></el-table-column>
      <el-table-column prop="name" label="视频名称"></el-table-column>
      <el-table-column prop="url" label="图标">
        <template slot-scope="scope">
          <!-- <img :src="scope.row.icon" alt="" style="height: 3rem;"> -->
          <!-- <video :src="scope.row.url" style="height: 10rem;" controls="controls"></video> -->
          <video id="myVideo" class="video-js" controls preload="auto">
            <source
              :src="scope.row.url"
              type="video/mp4"
            >
          </video>
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="180">
        <template slot-scope="scope">
        <!-- <template> -->
          <el-button type="text" size="small" @click="$router.push(`/videos/edit/${scope.row._id}`)">编辑</el-button>
          <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Vue from 'vue'
import Video from 'video.js'
import 'video.js/dist/video-js.css'
Vue.prototype.$video = Video // eslint-disable-line

export default {
  data(){
    return{
      videos:[],
    }
  },

  mounted() {
    console.log('video');
  },

  methods:{
    async fetch(){
      const res = await this.$http.get('rest/videos')
      this.videos = res.data;
    },
    async remove(row){
      this.$confirm(`是否确定要删除分类 "${row.name}"`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then( async () => {
        const res = await this.$http.delete(`rest/videos/${row._id}`) // eslint-disable-line no-unused-vars
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
        this.fetch();
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
    },

    initVideo() {
      //初始化视频方法
      let myPlayer = this.$video(myVideo, { // eslint-disable-line
        //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
        controls: true,
        //自动播放属性,muted:静音播放
        autoplay: "muted",
        //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
        preload: "auto",
        //设置视频播放器的显示宽度（以像素为单位）
        width: "800px",
        //设置视频播放器的显示高度（以像素为单位）
        height: "400px"
      });
    }
  },

  created(){
    this.fetch();
  }
}
</script>
