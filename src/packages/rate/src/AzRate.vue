<template>
  <div>
    <!--基础-->
    <div>
      <span class="star">
        <b class="ct-star  ic-star-off"></b>
        <b class="ct-star  ic-star-off"></b>
        <b class="ct-star  ic-star-off"></b>
        <b class="ct-star  ic-star-off"></b>
        <b class="ct-star  ic-star-off"></b>
      </span>
      <span class="star-txt"></span>
    </div>
  </div>

</template>

<script>
  export default {
    name: "AzRate",
    props:["rate"],
    methods: {
      star() {
        var aSpan = document.getElementsByClassName("star")[0];
        var aStxt = document.getElementsByClassName("star-txt")[0];
        var aBstar = aSpan.getElementsByTagName("b");
        var arrBtxt = this.rate;
        var num = 0;
        var onOff = true;
        for (var i = 0; i < aBstar.length; i++) {
          aBstar[i].index = i;
          //鼠标移入
          aBstar[i].onmouseover = function () {
            if (onOff) {
              num = this.index;
              aStxt.innerHTML = arrBtxt[num];
              for (var i = 0; i <= this.index; i++) {
                aBstar[i].style.backgroundPosition = "0 -28px";
              }
            }
          };
          //鼠标移开
          aBstar[i].onmouseout = function () {
            if (onOff) {//设定个开关，等开关为真就执行鼠标移除的代码
              aStxt.innerHTML = "";
              for (var i = 0; i <= this.index; i++) {
                aBstar[i].style.backgroundPosition = "0 0";
              }
            }
          };
          //鼠标点击
          aBstar[i].onclick = function () {
            onOff = false;//开关为假就不执行鼠标移除的代码
            //先清空
            aStxt.innerHTML = "";
            for (var i = 0; i < aBstar.length; i++) {
              aBstar[i].style.backgroundPosition = "0 0";
            }
            //点击当前星星，之前的都点亮包含自己
            num = this.index;
            aStxt.innerHTML = arrBtxt[num];
            for (var i = 0; i <= this.index; i++) {
              aBstar[i].style.backgroundPosition = "0 -28px";
            }
          };
        }
      },
    },
    mounted() {
      this.star();
    }
  }
</script>

<style scoped>
  @import "../../libs/theme/rate.css";
</style>
