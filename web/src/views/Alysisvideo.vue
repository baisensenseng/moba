<template>
  <div class="page-alysisvideo">
    <el-card class="box-card">
      <div class="">
        <span>
          <img src="" alt="">
        </span>
      </div>
      <h1>短视频/图集在线去水印解析</h1>
      <div class="text"><strong>目前支持</strong> 抖音/皮皮虾/火山/微视/微博/绿洲/最右/轻视频/instagram/哔哩哔哩/快手/全民小视频/皮皮搞笑/全民k歌/巴塞电影/陌陌/Before避风/开眼/Vue Vlog/小咖秀/西瓜视频/逗拍/虎牙/6间房/新片场/Acfun/美拍</div>
      <div class="text"><strong>温馨提示</strong> 粘贴视频地址时无需删除文案 但如果视频链接正确但解析失败请删掉文案后重试</div>
      <el-divider></el-divider>
      <div class="main-box" v-loading="loading">
        <el-input placeholder="请输入内容" v-model="model.url" class="input-with-select">
          <el-select v-model="model.select" slot="prepend" placeholder="请选择">
            <el-option label="视频" value="1"></el-option>
            <el-option label="图集" value="2"></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search" @click="analysis"></el-button>
        </el-input>
      </div>
      <div v-if="backdata.code === 200 && !backdata.images" class="back-box">
        <div class="back-box-title"><strong>{{backdata.title}}</strong></div>
        <div class="back-box-main">
          <el-button><a :href="backdata.cover" target="_blank">下载封面</a></el-button>
          <el-button><a :href="backdata.url" target="_blank">下载视频</a></el-button>
          <el-button><a :href="backdata.music" target="_blank">下载音频</a></el-button>
        </div>
      </div>
      <div v-if="backdata.code === 200 && backdata.images" class="back-box">
        <el-image 
          style="width: 100px; height: 100px"
          v-for="item in backdata.images"
          :key="item"
          :src="item" 
          :preview-src-list="backdata.images">
        </el-image>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        url: '',
        select: '1',
      },
      url:'',
      select:'1',
      backdata: {
        code:'',
        title:'',
        cover:'',
        url:'',
        music:'',
      },
      loading: false,
    }
  },
  created() {
    // this.fetch()
  },
  methods: {
    async analysis(){
      this.loading = true;
      // var reg= /(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g;
      // console.log(reg);
      // const url = this.model.url.match(reg);
      // console.log(url);
      // this.model.url = url[0];
      console.log(this.model);
      // this.model.url = 
      const res = await this.$http.post('analysisurlapi', this.model)
      if (res.data.code === 200) {
        this.backdata = res.data
        this.loading = false;
      } else {
        this.$message({
          message: `${res.data.msg}`,
          type: 'warning'
        });
      }
    },
  },
  
}
</script>

<style lang="scss">
  .page-alysisvideo{
    width: 100%;
    height: 100vh;
    background-image: url('../assets/images/alysisvideo/bg.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    .box-card{
      border-radius:40px;
      opacity: .6;
      position: absolute;
      margin: 8% auto 0;
      width: 750px;
      height: 520px;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      h1{
        text-align: center;
      }
      .text{
        margin: 20px auto;
      }
      .el-select{
        width: 80px;
      }
      .main-box{
        
      }
      .back-box{
        margin: 30px auto 0;
        &-title{
          text-align: center;
        }
        &-main{
          margin: 30px auto 0;
          text-align: center;
        }
      }
    }
  }
</style>
