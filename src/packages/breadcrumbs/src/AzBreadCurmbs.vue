<template>
  <div class="breads">
    <span class="bread">
        <a  v-for="i in breads" :href="i.http" :style="{fontSize: size+'px'}"><cite>{{i.httptext}}</cite></a>
    </span>
  </div>
</template>

<script>
  export default {
    name: "AzBreadCurmbs",
    props:{
      size:{
        type:String,
        default: ''
      },
      breads:{
        type:Array,
        default:[
          {
            "http":"www.baidu.com",
            "httptext":"首页  /"
          },
          {
            "http":"www.baidu.com",
            "httptext":"系统管理  /"
          },
          {
            "http":"www.baidu.com",
            "httptext":"系统日志"
          }
        ]
      }
    }
  }
</script>

<style scoped>
  @import "../../libs/theme/breadcurmbs.css";
</style>
