<template>
  <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
      <home-swiper :banners="banners"></home-swiper>
      <home-views :recommends="recommends"></home-views>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./homebaby/HomeSwiper";
  import HomeViews from "./homebaby/HomeViews";
  import {getHomeMultidata} from "network/home";


  export default {
    name: "Home",
    components:{
      NavBar,
     HomeSwiper,
      HomeViews
    },
    data(){
      return{
        //定义两个数组接收res里的数据
        banners:[],
        recommends:[]
      }
    },
    mounted() {
      //组件创建完了执行这个获取
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners=res.data.banner.list
        this.recommends=res.data.recommend.list
      })
    }
  }
  </script>

<style scoped>
.home-nav{
  background-color: var(--color-tint);
  color: white;
}



</style>
