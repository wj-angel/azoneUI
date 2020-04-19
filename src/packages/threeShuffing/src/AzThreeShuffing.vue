<template>
  <div class="content">
    <div class="photo-cube__wrapper">
      <input type="radio" id="1" name="cube" checked="true" class="photo-cube__control"/>
      <input type="radio" id="2" name="cube" class="photo-cube__control"/>
      <input type="radio" id="3" name="cube" class="photo-cube__control"/>
      <input type="radio" id="4" name="cube" class="photo-cube__control"/>
      <input type="radio" id="5" name="cube" class="photo-cube__control"/>
      <input type="radio" id="6" name="cube" class="photo-cube__control"/>
      <div class="photo-cube">
        <div class="photo-cube__panel" :style="{backgroundImage:'url('+img1+')',backgroundSize:'cover',backgroundPosition:'center'}"></div>
        <div class="photo-cube__panel" :style="{backgroundImage:'url('+img2+')',backgroundSize:'cover',backgroundPosition:'center'}"></div>
        <div class="photo-cube__panel" :style="{backgroundImage:'url('+img3+')',backgroundSize:'cover',backgroundPosition:'center'}"></div>
        <div class="photo-cube__panel" :style="{backgroundImage:'url('+img4+')',backgroundSize:'cover',backgroundPosition:'center'}"></div>
        <div class="photo-cube__panel" :style="{backgroundImage:'url('+img5+')',backgroundSize:'cover',backgroundPosition:'center'}"></div>
        <div class="photo-cube__panel" :style="{backgroundImage:'url('+img6+')',backgroundSize:'cover',backgroundPosition:'center'}"></div>
      </div>
      <div class="photo-cube__actions--left">
        <label for="6" class="photo-cube__action"></label>
        <label for="1" class="photo-cube__action"></label>
        <label for="2" class="photo-cube__action"></label>
        <label for="3" class="photo-cube__action"></label>
        <label for="4" class="photo-cube__action"></label>
        <label for="5" class="photo-cube__action"></label>
      </div>
      <div class="photo-cube__actions--right">
        <label for="2" class="photo-cube__action"></label>
        <label for="3" class="photo-cube__action"></label>
        <label for="4" class="photo-cube__action"></label>
        <label for="5" class="photo-cube__action"></label>
        <label for="6" class="photo-cube__action"></label>
        <label for="1" class="photo-cube__action"></label>
      </div>
      <div class="photo-cube__indicators">
        <label for="1" class="photo-cube__indicator" :style="{backgroundColor:bg}"></label>
        <label for="2" class="photo-cube__indicator" :style="{backgroundColor:bg}"></label>
        <label for="3" class="photo-cube__indicator" :style="{backgroundColor:bg}"></label>
        <label for="4" class="photo-cube__indicator" :style="{backgroundColor:bg}"></label>
        <label for="5" class="photo-cube__indicator" :style="{backgroundColor:bg}"></label>
        <label for="6" class="photo-cube__indicator" :style="{backgroundColor:bg}"></label>
      </div>
    </div>
  </div>

</template>

<script>
 export default {
    name: "AzThreeShuffing",
    props:["img1","img2","img3","img4","img5","img6","drug","bg"]
  }
</script>

<style scoped>
  @import "../../libs/theme/threeShuffing.css";
</style>
