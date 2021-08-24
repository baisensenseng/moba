<template>
  <div class="page-article" v-if="model">
    <div class="d-flex py-3 px-2 border-bottom">
      <div class="iconfont icon-fanhui text-blue"></div>
      <div class="flex-1 text-blue pl-2"> 
        {{model.title}}
      </div>
      <div class="text-grey fs-xs"></div>
    </div>
    <div v-html="model.body" class="px-3 body fs-lg"></div>
    <div class="px-3 border-top py-2">
      <div class="d-flex ai-center">
        <i class="iconfont icon-fanhui"></i>
        <strong class="text-bule fs-lg ml-2">相关资讯</strong>
      </div>
    </div>
    <div class="px-3">
      <router-link class="pt-2" tag="div" :to="`/articles/${item._id}`" v-for="item in model.related" :key="item._id">{{item.title}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: null
    }
  },
  props: {
    id: {required: true}
  },
  watch:{
    id: 'fetch',
    // id(){
    //   this.fetch()
    // }
  },
  created() {
    this.fetch()
  },
  methods: {
    async fetch(){
      const res = await this.$http.get(`articles/${this.id}`)
      this.model = res.data
    }
  },
  
}
</script>

<style lang="scss">
  .page-article{
    .body{
      img{
        max-width: 100%;
        height: auto;
      }
      iframe{
        max-width: 100%;
        height: auto;
      }
    }
  }
</style>
