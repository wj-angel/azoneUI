<template>
  <div>
    <!--div稍微从下往上滑动-->
    <div class="bottomtotoplittle"  :style="{left:leftlong+'px',top:toplong+'px',width:size+'px',height:size+'px',backgroundColor:bg}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import   '../../libs/jquery.min'
  export default {
    name: "AzAnimationFifth",
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
        default:''
      }
    },
    mounted(){
      // div稍微从下往上滑动
      $(".bottomtotoplittle").click(function(){
        $(".bottomtotoplittle").animate({
          top: "30px"
        },200);
        $(".bottomtotoplittle").animate({
          top: "0px"
        },200);
      })
    }
  }
</script>

<style scoped>
  @import "../../libs/theme/animationfifth.css";
</style>

