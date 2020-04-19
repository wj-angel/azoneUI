<template>
  <div>
    <az-button id="btnaz">点击弹出</az-button>
    <!--有内容,可取消,可确定,可关闭,可拖拽的弹出层(居中显示)-->
    <!--询问层-->
    <div id="az-dia" class="az-dialogp drag" v-drag>
      <div class="az-titlep">信息</div>
      <span class="az-setwindp">
        <a href="javascript:;" class="az-closep"><img src="../../libs/images/az_close.png"></a>
      </span>

      <div class="az-paddingp">
        {{enter}}
      </div>
      <div class="az-btnp">
        <a href="javascript:;" class="az-btnConfirm">确定</a>
        <a href="javascript:;" class="az-btnCancel">取消</a>
      </div>
    </div>
    <!--确认后消息-->
    <div class="az-determineafter">
      <a href="#" class="az-determin">
        <img src="../../libs/images/az_happy.png">
        <span>{{outer}}!</span>
      </a>
    </div>
  </div>
</template>

<script>
  import   '../../libs/jquery.min'
  export default {
    name: "AzPopup",
    props:["enter","outer"],
    directives:{
      drag(el,bindings){
        el.onmousedown = function(e){
          var disx = e.pageX - el.offsetLeft;
          var disy = e.pageY - el.offsetTop;
          document.onmousemove = function (e){
            el.style.left = e.pageX - disx+'px';
            el.style.top = e.pageY - disy+'px';
          };
          document.onmouseup = function(){
            document.onmousemove = document.onmouseup = null;
          }
        }
      }
    },
    mounted(){
      // 有内容,可取消,可确定,可关闭,可拖拽的弹出层(居中显示)
      //取消
      $("#btnaz").click(function () {
        $("#az-dia").show('slow');
      })
      $('.az-btnCancel').click(function(){
        $('.az-dialogp').hide('slow');
      })
      //close
      $('.az-closep').click(function(){
        $('.az-dialogp').hide('slow');
      })
      //确认
      $('.az-btnConfirm').click(function(){
        $('.az-dialogp').hide();
        $('.az-determineafter').show('slow');
        setInterval(function(){
          $('.az-determineafter').hide("slow");
        },2000)
      })
    },
  }
</script>

<style scoped>
  @import "../../libs/theme/popup.css";
</style>
