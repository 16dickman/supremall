<template>
  <div>
    <p>{{iid}}</p>
  </div>
</template>

<script>
  export default {
    name: "Details",
    data(){
      return {
        iid:null
      }
    },
    created() {
      this.iid=this.$route.params.iid
    }
  }
</script>

<style scoped>

</style>