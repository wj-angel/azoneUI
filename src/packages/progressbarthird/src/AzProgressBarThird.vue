<template>
  <div>
    <!--波纹进度条-->
    <div class="container" :style="{width}">
      <div class="warning">
      </div>
    </div>
  </div>
</template>

<script>
 export default {
    name: "AzProgressBarThird",
     props:{
       width:{
         type:String,
         default: "500px"
       }
     }
    }
</script>

<style scoped>
  @import "../../libs/theme/progressbarthird.css";
</style>
