<template lang="">
  <div>
    <div class="topbar bg-black py-1 text-white px-3 d-flex ai-center">
      <!-- topbar -->
      <img src="../assets/images/logo.png" alt="" height='30'>
      <div class="pl-3 flex-1">
        <div class="text-white">王者荣耀</div>
        <div class="text-grey-1 fs-xxs">团队成就更多</div>
      </div>
      <button type="button" class="btn bg-primary">立即下载</button>
    </div>
    <div class="nav bg-primary pt-3 pb-2">
      <div class="nav d-flex text-white jc-around pb-1">
        <div class="nav-item active">
          <router-link class="nav-link" to="/" tag="div">
            首页
          </router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" to="/" tag="div">
            攻略中心
          </router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" to="/" tag="div">
            赛事中心
          </router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
  
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
}
</script>
<style lang="">
  
</style>