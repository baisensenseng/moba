<template>
  <div class="page-hero" v-if="model">
    <div class="topbar bg-black py-1 text-white px-3 d-flex ai-center">
      <!-- topbar -->
      <img src="../assets/images/logo.png" alt="" height='30'>
      <div class="pl-3 flex-1">
        <span class="text-white">王者荣耀</span>
        <span class="ml-2">攻略站</span>
        <!-- <div class="text-grey-1 fs-xxs">团队成就更多</div> -->
      </div>
      <!-- <button type="button" class="btn bg-primary">立即下载</button> -->
      <router-link to="/" tag="div">更多英雄 &gt;</router-link>
    </div>
    <h1>{{model.name}}</h1>
    <!-- <video src="" controls></video> -->
    <video :src="model.url" style="width: 100%" controls="controls"></video>
    <video :src="model.url" controls="controls" class="video-style" webkit-playsinline="true" playsinline="true"
    x5-video-player-type="h5" x5-video-player-fullscreen="true">
    </video>
  </div>
</template>


<script>
export default {
  data() {
    return {
      model: null,
    }
  },
  props: {
    id: { required: true}
  },
  created() {
    this.fecth()
  },
  methods: {
    async fecth(){
      console.log(this.id);
      const res = await this.$http.get(`videos/${this.id}`)
      this.model = res.data
    }
  },
}
</script>