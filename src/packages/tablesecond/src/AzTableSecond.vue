<template>
  <div class="table">
    <!--有全选反选功能的表格-->
    <table class="tables">
      <thead>
        <tr>
          <th>
            <div class="check">
              <input type="checkbox" class="input_check" id="cbAll">
              <label></label>
            </div>
          </th>
          <th  v-for="sp in stheadtext">{{sp}}</th>
        </tr>
      </thead>
      <tbody id="tb">
        <tr v-for="si in stbodytext">
          <td>
            <div class="checks">
              <input type="checkbox" class="input_check">
              <label></label>
            </div>
          </td>
          <td v-for="sj in si.texts">{{sj}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
 export default {
   name: "AzTableSecond",
 props:{
   stheadtext:{
     type:Array,
     default:
       ["ID", "产品名称", "总价", "优惠", "订单时间", "所属类型", "数量", "状态", "操作"]
   },
   stbodytext:{
     type:Array,
     default:[
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
 },
   methods:{
     check(){
       var all = document.getElementById("cbAll");
       var tbody = document.getElementById("tb");
       var checkboxs = tbody.getElementsByTagName("input");

       all.onclick = function() {
         for (var i = 0; i < checkboxs.length; i++) {
           var checkbox = checkboxs[i];
           checkbox.checked = this.checked;
         }
       };

       for (var i = 0; i < checkboxs.length; i++) {
         checkboxs[i].onclick = function() {
           var isCheckedAll = true;
           for (var i = 0; i < checkboxs.length; i++) {
             if (!checkboxs[i].checked) {
               isCheckedAll = false;
               break;
             }
           }
           all.checked = isCheckedAll;
         };
       }
     }
   },
   mounted() {
     this.check()
   }
 }
</script>

<style scoped>
  @import "../../libs/theme/tablesecond.css";
</style>
