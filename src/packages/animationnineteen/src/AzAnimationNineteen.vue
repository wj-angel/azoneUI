<template>
  <div>
    <!--360度旋转-->
    <div class="rotate" :style="{left:leftlong+'px',top:toplong+'px',width:size+'px',height:size+'px',backgroundColor:bg}">
    <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AzAnimationNineteen",
    props:{
      leftlong:{
        type:Number,
        default:0
      },
      size:{
        type:Number,
        default:120
      },
      toplong:{
        type:Number,
        default: 0
      },
      bg:{
        type:String,
        default:""
      }
    }
  }
</script>

<style scoped>
  @import "../../libs/theme/animationnineteen.css";
</style>

