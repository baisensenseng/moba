<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide>
        <img class="w-100" src="../assets/images/88f7acf6451d67170ba172091af7fa42.jpeg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/3da84d86175a05e5b9fd62beeff35e13.jpeg" alt="">
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/ae37bd718aa19d57ae7c80e0843aef86.jpeg" alt="">
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-2"  slot="pagination"></div>
    </swiper>

    <!-- start nav icon -->
    <div class="nav-icons bg-white mt-3  text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="n in 10" :key="n">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-2"></i>
        <span>收起</span>
      </div>
    </div>
    <!-- end nav icon -->
    <m-list-card icon="caidan1" title="新闻资讯" :categories="newsCats">
      <template #items="{category}">
        <router-link tag="div" :to="`/articles/${news._id}`" class="py-2 fs-lg d-flex" v-for="(news, index) in category.newsList" :key="index">
          <span class="text-info">{{news.categoryName}}</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{news.title}}</span>
          <span class="text-grey-1 fs-sm">{{news.createdAt | date}}</span>
        </router-link>
      </template>
    </m-list-card>

    <m-list-card icon="yingxiongxiangqing" title="英雄列表" :categories="heroCats">
      <template #items="{category}">
        <div class="d-flex flex-wrap" style="margin: 0 -0.5rem">
          <router-link tag="div" :to="`/heroes/${hero._id}`" class="p-2 text-center" style="width: 20%" v-for="(hero, index) in category.heroList" :key="index">
            <img :src="hero.avatar" alt="" class="w-100">
            <div>{{hero.name}}</div>
          </router-link>
        </div>
        
      </template>
    </m-list-card>

    <m-crad icon="caidan1" title="视频列表">
      <router-link tag="div" :to="`/videos/${item._id}`" class="py-2" v-for="item in videoList" :key="item._id">{{item.name}}</router-link>
    </m-crad>

    <m-crad icon="caidan1" title="支付模块">
      <!-- <router-link tag="div" :to="`/videos/${item._id}`" class="py-2" v-for="item in videoList" :key="item._id">{{item.name}}</router-link> -->
      <div class="components-input-demo-presuffix">
        <!-- <a-input ref="userNameInput" v-model="alipayinfo.userName" placeholder="Basic usage">
          <a-icon slot="prefix" type="user" />
          <a-tooltip slot="suffix" title="Extra information">
            <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
          </a-tooltip>
        </a-input>
        <br />
        <br /> -->
        <a-input prefix="￥" suffix="RMB" v-model.number="alipayinfo.totalAmount" />
        <a-input prefix="" suffix="tradeNo" placeholder="必填，随便填不能重复" v-model.number="alipayinfo.tradeNo" />
        <div class="text-center mt-3">
          <a-button type="primary" @click="alipay">
            支付
          </a-button>
        </div>
        <!-- <div> -->
        <a-modal class="qrcode-content" v-model="isPayqrcode" title="支付二维码" @ok="handleOk">
          <div class="code text-center" id="qrcode" ref="qrcode" v-if="isPayqrcode" @click="handleQrcode"></div>
        </a-modal>
        <!-- </div> -->
      </div>
    </m-crad>

    <m-crad icon="caidan1" title="抖音无水印视频解析">
      <div class="components-input-demo-presuffix">
        <a-input v-model="analysisurl.url" />
        <div class="text-center mt-3">
          <a-button class="" type="primary" @click="analysis">解析</a-button>
        </div>
        <div>dy视频链接：{{nodedata.dyurl}}</div>
        <div>视频链接：{{nodedata.url}}</div>
        <div>音频链接：{{nodedata.music}}</div>
        <!-- <div>{{analysisurl.dyurl}}</div>
        <div>{{analysisurl.dyurl}}</div> -->
      </div>
    </m-crad>
  </div>
</template>
<script>
import dayjs from 'dayjs'
// import alipayf2f from 'alipay-ftof';
import QRCode from 'qrcodejs2'

export default {
  data() {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        pagination:{
          el: ".pagination-home"
        }
      },
      newsCats: [],
      heroCats: [],
      videoList: [],
      alipayinfo:{
        tradeNo: "",      // 必填 商户订单主键, 就是你要生成的
        subject: "女装",      // 必填 商品概要
        totalAmount: 0.5,    // 必填 多少钱
        body: "黑丝吊带小蜡烛", // 可选 订单描述, 可以对交易或商品进行一个详细地描述，比如填写"购买商品2件共15.00元"
        timeExpress: 5       // 可选 支付超时, 默认为5分钟
      },
      isPayqrcode:false,
      qrcode:'',
      analysisurl:{
        dyurl:'',
        url:'',
        cover:'',
        music:'',
        title:'',
      },
      nodedata:{
        dyurl:'',
        url:'',
        cover:'',
        music:'',
        title:'',
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  filters: {
    date(val){
      return dayjs(val).format('MM/DD')
    }
  },
  created() {
    this.fetchNewsCats();
    this.fetchHeroCats();
    this.fetchVideo();
  },
  mounted() {
    console.log('alipay');
    console.log('xigua111');
    this.swiper.slideTo(3, 1000, false)
  },
  methods: {
    async fetchNewsCats(){
      const res = await this.$http.get('news/list');
      this.newsCats = res.data;
    },
    async fetchHeroCats(){
      const res = await this.$http.get('heroes/list');
      this.heroCats = res.data;
    },
    async fetchVideo(){
      const res = await this.$http.get('videos/list');
      this.videoList = res.data;
    },
    async alipay(){
      // var alipay_f2f = new alipayf2f(require("./config"));
      // alipay_f2f.createQRPay(this.alipayinfo).then(result => {
      //   if (result.code === '10000') {
      //     this.qrcode = result.qr_code;
      //     this.payOrder()
      //   }
      //   // if (result.alipay_trade_precreate_response.code === '10000') {
      //   //   this.qrcode = result.alipay_trade_precreate_response.qr_code;
      //   //   this.payOrder()
      //   // }
      // }).catch(error => console.error(error));

      const res = await this.$http.post('createInvoice', this.alipayinfo)
      const result = res.data
      if (result.code === '10000') {
        this.qrcode = result.qr_code;
        this.payOrder()
      }
    },
    // 展示二维码
    payOrder () {
      this.isPayqrcode = true
      // 二维码内容,一般是由后台返回的跳转链接,这里是写死的一个链接
      // this.qrcode = ''
      // 使用$nextTick确保数据渲染
      this.$nextTick(() => {
        this.crateQrcode()
      })
    },
    // 生成二维码
    crateQrcode () {
      this.qr = new QRCode('qrcode', {
        width: 150,
        height: 150, // 高度
        text: this.qrcode // 二维码内容
        // render: 'canvas' // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
        // background: '#f0f'
        // foreground: '#ff0'
      })
    },
    // 关闭弹框,清除已经生成的二维码
    closeCode () {
      this.$refs.qrcode.innerHTML = ''
    },
    handleOk(e) {
      console.log(e);
      this.isPayqrcode = false;
      this.$refs.qrcode.innerHTML = '';
    },
    handleQrcode() {
      window.open(`${this.qrcode}`)
    },

    async analysis(){
      const res = await this.$http.post('analysisurl', this.analysisurl)
      if (res.data.code) {
        this.nodedata = res.data
      } else {
        this.nodedata.dyurl = res.data
        // this.analysisurl.dyurl = res.data
      }
    },
  },
}
</script>
<style lang="scss">
@import '../assets/scss/_variables.scss';

.pagination-home{
  .swiper-pagination-bullet{
    opacity: 1;
    border-radius: .153846rem;
    background: map-get($colors, wihte);
  }
  &.swiper-pagination-bullet-active{
    background-color: map-get($colors, 'info');
  }
}

.nav-icons{
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item{
    width: 25%;
    border-left: 1px solid $border-color;
    &:nth-child(4n+1){
      border-left: none;
    }
  }
  
}
.qrcode-content{
  .ant-modal-body{
    text-align: center;
  }
  .code{
    display: inline-block;
    img{
      display: inline-block !important;
    }
  }
}

</style>