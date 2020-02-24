<template>
  <div class="tab-bar-item" @click="tabclick">
    <slot name="slot-icon"></slot>
<!--    <div :class="{active:off}"><slot name="slot-text" class=""></slot></div>-->
    <div :style="customizefun"><slot name="slot-text" class=""></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBaritem",

    // data(){
    //   return{
    //      off:true
    //   }
    // },
    props:{
      path:String,
      customize:{
        type:String,
        default:'red'
      }
    },
    methods:{
       tabclick(){
         this.$router.replace(this.path)
       }
    },
    computed:{
      off(){
        //indexof == -1 等于没找到
        return this.$route.path.indexOf(this.path) !== -1
      },
      customizefun(){
        return this.off ? {color:this.customize} : {}
      }
    }

  }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 15px;
  }
  .tab-bar-item img{
    height: 24px;
    margin-top: 5px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
  /*.active{*/
  /*  color: red;*/
  /*}*/

</style>
