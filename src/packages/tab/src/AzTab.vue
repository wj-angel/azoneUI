<template>
  <div id="box">
    <!--点击设置msg的值  如果msg等于0，第一个a添加cur类名，如果msg等于1，第二个a添加cur类名，以此类推。
       添加了cur类名，a就会改变样式 @click,:class ,v-show这三个是vue常用的指令或添加事件的方式-->
    <div class="tab-tit">
      <a href="javascript:;" v-for="(p,index) in shu1" @click="msg=index" :class="{'cur':msg===index}" :style="{backgroundColor:topstyle}">{{p}}</a>
    </div>
    <!--根据msg的值显示div,如果msg等于0，第一个div显示，其它三个div不显示。
    如果msg等于1，第二个div显示，其它三个div不显示。以此类推-->
    <div class="tab-con">
      <div v-show="msg===index"  v-for="(p,index) in shu2" :style="{backgroundColor:textstyle}">
        {{p}}
      </div>
    </div>
  </div>
</template>

<script>
 export default {
     name: "AzTab",
     props:{
        topstyle:{
          type:String,
          default:""
        },
       shu1:{
         type:Array,
         default:["头部1","头部2","头部3","头部4"]
       } ,
       shu2:{
         type:Array,
         default:["1文本","2文本","3文本","4文本"]
       } ,
       textstyle:{
         type:String,
         default:""
       },
     },
    data(){
      return{
        msg: 0
      }
    }
  }
</script>

<style scoped>
  @import "../../libs/theme/tab.css";
</style>
