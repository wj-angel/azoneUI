<template>
  <div class="box">
    <div id="returns"></div>
  </div>
</template>

<script>

  export default {
    name: "AzTool",
    mounted() {
      window.onload = function () {
        var oBtnTop = document.getElementById("returns");
        oBtnTop.onclick = function () {
          moveScroll(0, 500);
          return false;
        };
      };


      function moveScroll( iTarget, time ) {
        var timer = null;
        // 起点
        var start = document.documentElement.scrollTop || document.body.scrollTop;
        // 距离
        var dis =  iTarget - start;
        // 次数
        var count = Math.round( time / 30 );
        var num = 0;

        console.log(start);

        clearInterval(timer);
        timer = setInterval(function() {
          num += 1;
          // 匀减速
          var a = 1 - num / count;
          var cur = start + dis*( 1 - Math.pow(a,3));

          document.documentElement.scrollTop = cur;
          document.body.scrollTop = cur;

          if( num == count ){
            clearInterval(timer);
          }

        }, 30)

      }

    }

  }
</script>

<style scoped>
@import "../../libs/theme/tool.css";
</style>
