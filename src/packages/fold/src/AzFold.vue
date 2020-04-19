<template>
  <div class="box">
    <div class="tt">
      <h3>
        {{title}}
        <span>{{span}}</span>
      </h3>
      <div class="ii"></div>
    </div>
    <p class="pp">{{p}}</p>
  </div>
</template>

<script>
    export default {
        name: "AzFold",
        components:{},
      props:["title","span","p"],
        mounted(){
          $(".tt").each(function(i){
            $(this).find(".ii").click(()=>{
              $(this).next().slideToggle();
            });
          });

          let s=document.createElement("script");
          s.type="text/javascript";
          s.src="http://code.jquery.com/jquery-1.11.0.min.js";
          document.body.appendChild(s);

        }
    }
</script>

<style scoped>
  @import "../../libs/theme/fold.css";
</style>
