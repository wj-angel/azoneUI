<template>
  <div class="buttons">
  <button  :class="{ 'az-button':true ,
        'is-disabled': disabled ,
        'is-orgin': orgin,
        'is-around': around,
  }" :disabled="disabled" :style="{backgroundColor:bg,width:width+'px',height:height+'px',fontSize: size+'px'}">
  <slot></slot>
  </button>
  </div>
</template>

<script>
    export default {
        name: "AzButton",
      props:{
        width:{
          type: String,
          default: '100'
        },
        height:{
          type: String,
          default: '50'
        },
        bg: {
          type: String,
          default: ''
        },
        size: {
          type: String,
          default: ''
        },
        disabled: Boolean,
        around: Boolean,
        orgin: Boolean
      }
    }
</script>

<style scoped>
  @import "../../libs/theme/button.css";
</style>
