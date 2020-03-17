<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="swiperload">
      </a>
    </swiper-item>
  </swiper>
</template>


<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'
  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        default: []
      }
    },
    data(){
      return{
        ikk:false
      }
    },
    components:{
      Swiper,
      SwiperItem
    },
    methods:{
      swiperload(){
        if(! this.ikk){
          this.$emit('homeswipertop')
          this.ikk=true
        }
      }
    }
  }
</script>

<style scoped>

</style>