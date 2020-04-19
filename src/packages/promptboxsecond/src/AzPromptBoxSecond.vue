<template>
<div>
  <p class="tooltip">
    <a :data-tooltip="pbstext" href="#">{{pbsatext}}</a>
  </p>
</div>
</template>

<script>
  export default {
    name: "AzPromptBoxSecond",
    props:{
      pbstext:{
        type:String,
        default:""
      },
      pbsatext:{
        type: String,
        default: ""
      }
    }
  }
</script>

<style scoped>
  @import "../../libs/theme/promptboxsecond.css";
</style>
