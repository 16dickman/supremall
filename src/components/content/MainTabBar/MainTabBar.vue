<template>
  <tab-bar>
    <tab-bar-item path="/home" >
      <img slot="slot-icon" src="~assets/img/tabbar/home.svg" alt="" >
      <div slot="slot-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="slot-icon" src="~assets/img/tabbar/category.svg" alt="" >
      <div slot="slot-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="slot-icon" src="~assets/img/tabbar/cart.svg" alt="" >
      <div slot="slot-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" >
      <img slot="slot-icon" src="~assets/img/tabbar/profile.svg" alt="" >
      <div slot="slot-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "components/common/TabBar/TabBar";
  import TabBarItem from "components/common/TabBar/TabBaritem";
  export default {
    name: "MainTabBar",
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>
