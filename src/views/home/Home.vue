<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-con class="fackdd" v-show="isflex" ref="toposion1" :titles="['流行','新款','精选']" @tabclick="tab"></tab-con>

    <scroll class="content" ref="scroll" :probe-type="3"
             :pull-up-load="true"
             @scroll="scrollemit" @pullingUp="loadmore" >
       <home-swiper :banners="banners" @homeswipertop="homeswipertop"></home-swiper>
       <home-views :recommends="recommends"></home-views>
       <home-fack></home-fack>
       <tab-con  ref="toposion2" :titles="['流行','新款','精选']" @tabclick="tab"></tab-con>
       <goods-list :goods="shoutabimg"></goods-list>
     </scroll>
<!--    组件默认不能监听点击 需要使用native-->
    <back-top @click.native="backClick" v-show="isshow"></back-top>

  </div>
</template>

<script>
  import {getHomeMultidata,gethomegoods} from "network/home";

  import HomeSwiper from "./homebaby/HomeSwiper";
  import HomeViews from "./homebaby/HomeViews";
  import HomeFack from "./homebaby/HomeFack";

  import BackTop from 'components/content/backtop/BackTop'
  import TabCon from "./homebaby/TabCon";
  import NavBar from "components/common/navbar/NavBar";
  import GoodsList from "components/content/goods/GoodsList";
  import Scroll from "components/common/scroll/Scroll";

  import {debounce} from "../../common/utils";

  export default {
    name: "Home",
    components:{
      NavBar,
      HomeSwiper,
      HomeViews,
      HomeFack,
      GoodsList,
      TabCon,
      Scroll,
      BackTop
    },
    data(){
      return{
        //定义两个数组接收res里的数据
        banners:[],
        recommends:[],
        // 定义保存流行 新款  精选的对象
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]},
        },
        tabontype:'pop',
        isshow:false,
        topoffset:0,
        isflex:false,
        backY:0
      }
    },
    created() {
      //组件创建完了执行这个获取
      this.getHomeMultidata()

      //获取三幻神数据保存到goods里
      this.gethomegoods('pop')
      this.gethomegoods('new')
      this.gethomegoods('sell')



    },
    mounted() {
      const refresh=debounce(this.$refs.scroll.refresh,500)
      this.$bus.$on('itemimgload',() => {
        refresh()
      })
    },
    //因为bsscroll有bug 使用 keep alive会有概率重新渲染首页
    activated() {
      //记录路由进入的函数
      // console.log("hello");
      this.$refs.scroll.scrollTo(0,this.backY,0)
      this.$refs.scroll.refresh()
    },
    deactivated() {
      //记录路由离开的函数
      // console.log('im in');
      // this.backY=-1000;
    //  动态获取y
     this.backY= this.$refs.scroll.scroll.y
    },
    computed:{
      shoutabimg(){
        return this.goods[this.tabontype].list
      }
    },
    methods:{
      //点击选项卡切换
      tab(index){
       switch (index) {
         case 0:this.tabontype='pop'
           break
         case 1:this.tabontype='new'
           break
         case 2:this.tabontype='sell'
           break
       }
       this.$refs.toposion1.currentIndex=index
       this.$refs.toposion2.currentIndex=index
      },
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          // console.log(res+'hello');
          this.banners=res.data.banner.list;
          this.recommends=res.data.recommend.list;
        })
      },
      gethomegoods(type){
        const page=this.goods[type].page + 1
        gethomegoods(type,page).then(res => {
           this.goods[type].list.push(...res.data.list)
          this.goods[type].page + 1
          // 数据加载完之后loadmore 继续加载
          this.$refs.scroll.finishPullUp()
        })
      },
      backClick() {
        this.$refs.scroll.scrollTo(0, 0);
      },
      //显示隐藏
      scrollemit(position){
        this.isshow=-position.y > 1000

        //offsettop吸顶
        this.isflex=-position.y > this.topoffset
      },
      loadmore(){
        this.gethomegoods(this.tabontype)
      },
      homeswipertop(){
        this.topoffset=this.$refs.toposion2.$el.offsetTop
      }
    }
  }
  </script>

<style scoped>
  #home{
    padding-top: 44px;
    position: relative;
    height: 100vh;

  }
.home-nav{
  background-color: var(--color-tint);
  font-weight: bold;
  color: white;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 99;
}
 .content{
  /*设置滚动区域*/
   position: absolute;
   top: 44px;
   bottom: 49px;
   left: 0;
   right: 0;
}
  .fackdd{
    position: relative;
    z-index: 9;
  }
</style>
