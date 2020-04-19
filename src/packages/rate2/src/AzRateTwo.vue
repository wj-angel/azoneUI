<template>
  <div>

    <!--带文本内容-->
    <div>
      <span class="star1">
        <b class="ct-star  ic-star-off"></b>
        <b class="ct-star  ic-star-off"></b>
        <b class="ct-star  ic-star-off"></b>
        <b class="ct-star  ic-star-off"></b>
        <b class="ct-star  ic-star-off"></b>
      </span>

    </div>
  </div>

</template>

<script>
  export default {
    name: "AzRateTwo",
    methods: {
      star1() {
        var aSpan = document.getElementsByClassName("star1")[0];
        var aBstar = aSpan.getElementsByTagName("b");
        var num = 0;
        var onOff = true;
        for (var i = 0; i < aBstar.length; i++) {
          aBstar[i].index = i;
          //鼠标移入
          aBstar[i].onmouseover = function () {
            if (onOff) {
              num = this.index;
              for (var i = 0; i <= this.index; i++) {
                aBstar[i].style.backgroundPosition = "0 -28px";
              }
            }
          };
          //鼠标移开
          aBstar[i].onmouseout = function () {
            if (onOff) {//设定个开关，等开关为真就执行鼠标移除的代码
              for (var i = 0; i <= this.index; i++) {
                aBstar[i].style.backgroundPosition = "0 0";
              }
            }
          };
          //鼠标点击
          aBstar[i].onclick = function () {
            onOff = false;//开关为假就不执行鼠标移除的代码
            //先清空
            for (var i = 0; i < aBstar.length; i++) {
              aBstar[i].style.backgroundPosition = "0 0";
            }
            //点击当前星星，之前的都点亮包含自己
            num = this.index;
            for (var i = 0; i <= this.index; i++) {
              aBstar[i].style.backgroundPosition = "0 -28px";
            }
          };
        }
      },
    },
    mounted() {
      this.star1();
    }
  }
</script>

<style scoped>
  @import "../../libs/theme/rate.css";
</style>
