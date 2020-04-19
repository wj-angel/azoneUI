<template>
  <ul id="ul1" :style="{backgroundColor:bgc}">
    <li :key="i" v-for="(n,i) in data">
      <a href="javascript:void(0);"  >{{n.name}}</a>
      <div class="uldiv" :style="{backgroundColor:bgc}">
        <a :key="i" v-for="(n1,i) in n.name1" href="javascript:void(0);">{{n1}}</a>
      </div>
    </li>
  </ul>
</template>

<script>
    export default {
        name: "AzDropDownMenu",
      props:{
        data:{
          type: Array,
          default:[
            {name:"一1",name1:["二1.1","二级菜单1.2","二级菜单1.3",]},
            {name:"一2.0",name1:["二2.1","二级菜单2.2","二级菜单2.3",]},
            {name:"一3.0",name1:["二3.1","二级菜单3.2","二级菜单3.3",]},
            {name:"一4.0",name1:["二4.1","二级菜单4.2","二级菜单4.3",]}
          ]
        },
        bgc:{
          type:String,
          default: ""
        }
      }

    }
</script>

<style scoped>
  @import "../../libs/theme/dropDownMenu.css";
</style>
