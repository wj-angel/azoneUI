<template>
  <div>
    <date-picker :value="date"></date-picker>
  </div>
</template>

<script>
    import DatePicker from 'z-date-picker'
    export default {
      name: "AzDate",
      components:{DatePicker},
      props:["date"]
    }
</script>

<style scoped>
  /*@import "../../libs/theme/date.css";*/
</style>
