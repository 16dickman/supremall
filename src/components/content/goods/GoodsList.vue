<template>
  <div class="goodsitem" >
        <goods-item v-for="item in goods" :goodsitem="item"></goods-item>
  </div>
</template>

<script>
  import GoodsItem from "./GoodsItem";
  export default {
    name: "GoodsList",
    components:{
      GoodsItem
    },
    props:{
      goods:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
.goodsitem{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  padding: 2px;
}
</style>