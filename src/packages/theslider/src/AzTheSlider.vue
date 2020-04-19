<template>
  <div class="theslider">
      <!--基础滑块-->
    <input type="range" :style="{width}">
   </div>
</template>

<script>
  import   '../../libs/jquery.min'
  export default {
    name: "AzTheSlider",
    props:{
      width:{
        type:String,
        default:''
      }
    }
  }
</script>

<style scoped>
  @import "../../libs/theme/theslider.css";
</style>
