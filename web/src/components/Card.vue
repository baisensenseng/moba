<template lang="">
  <div class="card bg-white mt-2 p-3 ">
    <!-- card顶部标题 -->
    <div class="card-header d-flex pb-3">
      <i class="iconfont icon-caidan1" :class="`icon-${icon}`"></i>
      <div class="fs-xl flex-1 px-2 ">{{title}}</div>

      <i class="iconfont icon-more"></i>
    </div>
    <!-- card内容 -->
    <div class="card-body pt-3">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {type: String,required: true},
    icon: {type: String,required: true},
  },
  data() {
    return {
      
    }
  },
}
</script>

<style lang="scss">
@import '../assets/scss/_variables.scss';
.card{
  border-bottom: 1px solid $border-color;
  .card-header{
    border-bottom: 1px solid $border-color;
  }
}
</style>