<template>
  <div>
    <!--有百分比,可以动的进度条-->
    <div id="box"  :style="{'width':+length+'px'}" >
      <span id="barbar"></span>
    </div>
  </div>
</template>

<script>
 export default {
     name: "AzProgressBarSecond",
     props:{
       width:{
         type:String,
         default:"200"
       },
       length:{
         type:String,
         default:"0"
       }
     },
     mounted(){
       // 有百分比,可以动的进度条
       var obar=document.getElementById("barbar");
       var boxwidth=this.width;
       var length=this.length;
       // console.log(boxwidth)
       //定义一个定时器，因为后面要清除我们给它命名
       var timer=setInterval(function(){
         //速度为3，匀速，也可以利用随机数函数让速度随机
         var speed=3;
         //设置退出条件，当span的宽度大于盒子超出就清除定时器
         if(obar.offsetWidth>boxwidth){
           clearInterval(timer);
         }else{
           //条件不满足时我们span的宽度为当前宽度加速度
           obar.style.width=speed+obar.offsetWidth+"px";
           //由于浮点数误差，这边我们乘以一百再取整。
           obar.innerText=parseInt((obar.offsetWidth/length)*100)+"%";
         }
       },30)
    }
  }
</script>

<style scoped>
  @import "../../libs/theme/progressbarsecond.css";
</style>
