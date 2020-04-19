<template>
  <div class="table">
    <!--静态表格-->
    <table class="tables tables1">
      <thead>
        <tr>
          <th v-for="p in theadtext">{{p}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in tbodytext">
          <td v-for="j in i.texts">{{j}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
 export default {
   name: "AzTable",
   props:{
     theadtext:{
       type:Array,
       default:["ID","产品名称","总价","优惠","订单时间","所属类型","数量","状态","操作"]
     } ,
     tbodytext: {
       type: Array,
       default: [
         {
           texts:["text","text","text","text","text","text","text","text","text"]
         },
         {
           texts:["text","text","text","text","text","text","text","text","text"]
         },
         {
           texts:["text","text","text","text","text","text","text","text","text"]
         },
         {
           texts:["text","text","text","text","text","text","text","text","text"]
         }
       ]
     }
   }
 }
</script>

<style scoped>
  @import "../../libs/theme/table.css";
</style>
