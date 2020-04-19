<template>
  <div class="User_ratings User_grade" id="div_fraction0">
    <div class="ratings_bars">
      <span id="title0">0</span>
      <span class="bars_10">0</span>
      <div class="scale" id="bar0">
        <div></div>
        <span id="btn0"></span>
      </div>
      <span class="bars_10">10</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AzTheSliderSecond",
    mounted(){
      this.scale = function (btn, bar, title) {
        this.btn = document.getElementById(btn);
        this.bar = document.getElementById(bar);
        this.title = document.getElementById(title);
        this.step = this.bar.getElementsByTagName("DIV")[0];
        this.init();
      };
      this.scale.prototype = {
        init: function () {
          var f = this, g = document, b = window, m = Math;
          f.btn.onmousedown = function (e) {
            var x = (e || b.event).clientX;
            var l = this.offsetLeft;
            var max = f.bar.offsetWidth - this.offsetWidth;
            g.onmousemove = function (e) {
              var thisX = (e || b.event).clientX;
              var to = m.min(max, m.max(-2, l + (thisX - x)));
              f.btn.style.left = to + 'px';
              f.ondrag(m.round(m.max(0, to / max) * 100), to);
              b.getSelection ? b.getSelection().removeAllRanges() : g.selection.empty();
            };
            g.onmouseup = new Function('this.onmousemove=null');
          };
        },
        ondrag: function (pos, x) {
          this.step.style.width = Math.max(0, x) + 'px';
          this.title.innerHTML = pos / 10 + '';
        }
      }
      new this.scale('btn0', 'bar0', 'title0');
    }
  }
</script>

<style scoped>
  @import "../../libs/theme/theslidersecond.css";
</style>
