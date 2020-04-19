<template>
  <div>
    <!--渐现-->
    <div class="fade-in" :style="{left:leftlong+'px',top:toplong+'px',width:size+'px',height:size+'px',backgroundColor:bg}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import   '../../libs/jquery.min'
  export default {
    name: "AzAnimationSevteen",
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
    },
    mounted(){
      //渐现
      $('.fade-in').click(function(){
        $(".fade-in").animate({
          opacity:"0"
        },200);
        $(".fade-in").animate({
          opacity:"1"
        },200);
      })
    }
  }
</script>

<style scoped>
  @import "../../libs/theme/animationsevteen.css";
</style>

