<template>
  <div class="goods-item" @click="xclick">
<!--    @load监听图片是否加载完成-->
    <img :src="goodsitem.show.img" alt="" @load="imgload">
    <div class="goods-info">
      <p>{{goodsitem.title}}</p>
      <span class="price">￥{{goodsitem.price}}</span>
      <span class="collect">{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsItem",
    props:{
      goodsitem:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      imgload(){
        this.$bus.$emit('itemimgload')
      },
      xclick(){
        this.$router.push('/details/'+this.goodsitem.iid)
      }
    }

  }
</script>

<style scoped>
 .goods-item{
   padding: 0.21rem;
   width: 48%;
   position: relative;
   padding-bottom: 1.68rem;
 }
  .goods-item img{
    width: 100%;
    border-radius: 0.21rem;
  }
  .goods-info{
    font-size: 0.64rem;
    text-align: center;
    position: absolute;
    bottom: 0.21rem;
    left: 0;
    right: 0;
  }
  .goods-info p{
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
 .price {
   /* 价格 */
   color: var(--color-high-text);
   margin-right: 0.85rem;
 }
 .collect::before {
   display: inline-block;
   content: "";
   background: url("~assets/img/common/collect.svg") 0 0/0.6rem 0.6rem;
   position: relative;
   top: 0.04rem;
   right: 0.1rem;
   height: 0.6rem;
   width: 0.6rem;
 }
</style>