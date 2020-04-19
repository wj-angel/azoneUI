<template>
  <div>
    <!--loading-->
    <div id="ddr">
      <div class="ddr ddr1" :style="{backgroundColor:bg}"></div>
      <div class="ddr ddr2" :style="{backgroundColor:bg}"></div>
      <div class="ddr ddr3" :style="{backgroundColor:bg}"></div>
      <div class="ddr ddr4" :style="{backgroundColor:bg}"></div>
      <div class="ddr ddr5" :style="{backgroundColor:bg}"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AzAnimation",
    props:{
     bg:{
       type:String,
       default:""
     }
    }
  }
</script>

<style scoped>
  @import "../../libs/theme/animation.css";
</style>

