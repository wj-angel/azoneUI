<template>
  <div>
    <colorPicker v-model="colors"  />
  </div>
</template>

<script>
    export default {
      name: "AzColorPicker",
      props:{
        colors:{
          type:String,
          default:'blue'
        }
      }
    }
</script>

<style scoped>

</style>
