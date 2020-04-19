<template>
  <div class="big">
    <div id="box2345">
      <div class="fa">
        <div class="faR">
          <img src="//thyrsi.com/t6/660/1547888452x2890208847.jpg" alt="">
          <span>Anthony</span>
        </div>
        <div class="faL">
          <div class="pp">
            <p>这是一句话</p>
            <a href="##">回复</a>
          </div>
          <div class="aa">
            <p>
              <a href="##">
                <span class="iconfont icon-ding"></span>
                顶</a>&nbsp;&nbsp;&nbsp;
              <a href="##">
                <span class="iconfont icon-cai1"></span>
                踩</a>
            </p>
            <span>2019-01-03</span>
          </div>
        </div>
      </div>
      <hr/>
    </div>
    <input type="text" value="" id="kk1" placeholder="昵称"/>:
    <input type="text" value="" id="kk2" placeholder="我也说一句......"/>
    <input @click="dian" type="button" value="发表" id="fb"/>
  </div>
</template>

<script>
    export default {
        name: "AzCommunication",
        methods:{
          dian() {
            function z(id) {
              return document.getElementById(id);
            }

            if (z("kk2").value != "") {
              z("box2345").innerHTML += `<div style='width:100%;display: -webkit-flex;padding:10px 0;' class='fa'>\
                           <div style='margin:0 3%;text-align: center;' class='faR'>\
                             <img style='display: block;width:50px;height:50px;border-radius: 50%;margin:0 auto 10px;' src='//thyrsi.com/t6/660/1547888452x2890208847.jpg' />\
                             <span style='font-size:14px;'>` + z('kk1').value + `</span>\
                           </div>\
                           <div style='width:100%;margin-left:3%;display: -webkit-flex;flex-direction: column;justify-content: space-between;' class='faL'>\
                             <div style='width:90%;color:#666;display: -webkit-flex;justify-content: space-between;' class='pp'>\
                               <p style='width:80%;'>` + z('kk2').value + `</p>\
                               <a style='font-size:14px;color:#007aff;text-decoration: underline;' href='##'>回复</a>\
                             </div>\
                             <div style='width:90%;display:-webkit-flex;justify-content:space-between;margin-bottom: 5px;' class='aa'>\
                               <p>\
                                 <a style='font-size:14px;text-decoration: none;color:deepskyblue;' href='##'>\
                                   <span class='iconfont icon-ding'></span>\
                                   顶</a>&nbsp;&nbsp;&nbsp;\
                                 <a style='font-size:14px;text-decoration: none;color:deepskyblue;' href='##'>\
                                   <span class='iconfont icon-cai1'></span>\
                                   踩</a>\
                               </p>\
                               <span>2019-01-15</span> \
                             </div>\
                           </div>\
                         </div>\
                      <hr/>`;
              z("kk1").value = z("kk2").value = "";
            }

          }

        },
        mounted() {
          window.onload = function () {
            function z(id) {
              return document.getElementById(id);
            }

            document.onkeydown = function (event) {
              if (z("kk2").value != "") {
                var ev = window.event || event;
                if (ev.keyCode == 13) {

                  z("box2345").innerHTML += `<div style='width:100%;display: -webkit-flex;padding:10px 0;' class='fa'>\
                           <div style='margin:0 3%;text-align: center;' class='faR'>\
                             <img style='display: block;width:50px;height:50px;border-radius: 50%;margin:0 auto 10px;' src='//thyrsi.com/t6/660/1547888452x2890208847.jpg' />\
                             <span style='font-size:14px;'>` + z('kk1').value + `</span>\
                           </div>\
                           <div style='width:100%;margin-left:3%;display: -webkit-flex;flex-direction: column;justify-content: space-between;' class='faL'>\
                             <div style='width:90%;color:#666;display: -webkit-flex;justify-content: space-between;' class='pp'>\
                               <p style='width:80%;'>` + z('kk2').value + `</p>\
                               <a style='font-size:14px;color:#007aff;text-decoration: underline;' href='##'>回复</a>\
                             </div>\
                             <div style='width:90%;display:-webkit-flex;justify-content:space-between;margin-bottom: 5px;' class='aa'>\
                               <p>\
                                 <a style='font-size:14px;text-decoration: none;color:deepskyblue;' href='##'>\
                                   <span class='iconfont icon-ding'></span>\
                                   顶</a>&nbsp;&nbsp;&nbsp;\
                                 <a style='font-size:14px;text-decoration: none;color:deepskyblue;' href='##'>\
                                   <span class='iconfont icon-cai1'></span>\
                                   踩</a>\
                               </p>\
                               <span>2019-01-15</span> \
                             </div>\
                           </div>\
                         </div>\
                      <hr/>`;
                  z("kk1").value = z("kk2").value = "";

                }
              }
            }
          }

        }
    }
</script>

<style scoped>
  @import "../../libs/theme/communication.css";
</style>
