<template>
  <div>
    <!--平滑放大-->
    <div class="smoothzoom"  :style="{left:leftlong+'px',top:toplong+'px',width:size+'px',height:size+'px',backgroundColor:bg}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import   '../../libs/jquery.min'
  export default {
    name: "AzAnimationSixteen",
    props:{
      bg:{
        type:String,
        default:''
      },
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
      }
    },
    mounted(){
      //平滑放大
      $('.smoothzoom').click(function(){
        $(".smoothzoom").animate({
          width:"100px",
          height:"100px",
          lineHeight:"100px"
        },120);
        $(".smoothzoom").animate({
          width:"120px",
          height:"120px",
          lineHeight:"120px"
        },120);
      })
    }
  }
</script>

<style scoped>
  @import "../../libs/theme/animationsixteen.css";
</style>

