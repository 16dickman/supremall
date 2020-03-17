<template>
  <div class="tab-con">
    <div v-for="(item,index ) in titles" class="tab-con-item"
         :class="{active:index === currentIndex}" @click="itemclick(index)">
       <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Tabcon",
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        currentIndex:0
      }
    },
    methods:{
      itemclick(index){
         this.currentIndex=index
         this.$emit('tabclick',index)

      }
    }
  }
</script>

<style scoped>
  .tab-con{
    display: flex;
    text-align: center;
    background-color: #fff;
  }
  .tab-con-item{
    flex: 1;
    line-height: 40px;
    font-weight: bold;
  }
.active{
  color: var(--color-high-text);
  border-bottom: 3px solid var(--color-high-text);
}
</style>