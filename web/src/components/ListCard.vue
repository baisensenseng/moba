<template>
  <m-crad :icon="icon" :title="title">
    <!-- nav选择 -->
    <div class="nav jc-between">
      <div class="nav-item" :class="{active : active === index}"
        v-for="(category, index) in categories" :key="index"
        @click="$refs.list.swiper.slideTo(index)"
      >
        <div class="nav-link">{{category.name}}</div>
      </div>
    </div>
    <!-- navbody -->
    <div class="pt-3">
      <swiper ref="list" @slide-change="() => active = $refs.list.swiper.realIndex" :options="{autoHeight: true}">
        <swiper-slide v-for="(category, index) in categories" :key="index">
            <slot name="items" :category="category"></slot>
        </swiper-slide>
      </swiper>
    </div>
  </m-crad>
</template>

<script>
export default {
  props: {
    title: {type: String,required: true},
    icon: {type: String,required: true},
    categories: {type: Array,required: true},
  },
  data() {
    return {
      active: 0,

    }
  },
}
</script>