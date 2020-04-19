<template>
  <div>
    <!--基础进度条-->
    <div class="progress">
      <span class="bar" :style="{width}">{{progresstext}}</span>
    </div>
  </div>
</template>

<script>
 export default {
    name: "AzProgressBar",
    props: {
      progresstext: {},
      width:{
        type:String,
        default:'50%'
      }
    }
 }
</script>

<style scoped>
  @import "../../libs/theme/progressbar.css";
</style>
