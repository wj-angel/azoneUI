<template>
  <div class="both">
    <div class="box">
      <div v-for="(c,i) in content" class="imgBox" :style="{backgroundColor:c.cbg}">
        {{c.cn}}
        <p class="wordP" :style="{backgroundColor:maskbg}">{{c.mask}}</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "AzAccordion",
        props:{
          content:{
            type:Array,
            default:[
              {"cn":"示例一","mask":"蒙版一","cbg":"red"},
              {"cn":"示例二","mask":"蒙版二","cbg":"green"},
              {"cn":"示例三","mask":"蒙版三","cbg":"blue"},
              {"cn":"示例四","mask":"蒙版四","cbg":"yellow"},
              {"cn":"示例五","mask":"蒙版五","cbg":"gray"}
            ]
          },
          maskbg:{
            type:String,
            default:" rgba(0,0,0,.6)"
          }
        }
    }
</script>

<style scoped>
  @import "../../libs/theme/accordion.css";
</style>
