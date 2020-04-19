<template>
  <div>
    <!--基础轮播图-->
    <div id="basebox" :style="{'height':+silderHeight+'px','width':+silderWidth+'px'}">
      <img class="slideimg" v-for="b in sildershow" :src="b"/>
      <ul  class="slideul"  :style="{'left':+ulLeft+'px','bottom':+ulBottom+'px'}">
        <li class="slideli" v-for="a in sildershow" :style="{'height':+doudouWidth+'px','width':+doudouWidth+'px','background':+doudouBgcolor}"></li>
      </ul>
    </div>
  </div>

</template>

<script>
  export default {
    name: "AzSildeshowOne",
    props:["ulLeft","ulBottom","sildershow","silderTime","silderWidth","silderHeight","doudouHeightColor","doudouColor","doudou","doudouBgcolor","doudouWidth"],
    methods:{
      silder()
      {
        function $(str){
          if(str.charAt(0)=="#"){
            return document.getElementById(str.substring(1));
          }else if(str.charAt(0)=="."){
            return document.getElementsByClassName(str.substring(1));
          }else{
            return document.getElementsByTagName(str);
          }
        }
        var doudouHeightColor=this.doudouHeightColor;
        var doudouColor=this.doudouColor
        function initUl(){
          $('.slideul')[0].style.zIndex=2;
          let imgs=$('.slideimg')
          for(let i=0;i<imgs.length;i++){
            imgs[i].style.zIndex=0
          }
          imgs[0].style.zIndex=1;
          let lis=$('.slideli')
          for(let i=0;i<lis.length;i++){
            lis[i].style.backgroundColor=doudouColor;
            lis[0].style.backgroundColor=doudouHeightColor;
          }

        }
        let timer=null;
        let currentimg=0;
        let arr=["http://www.baidu.com","http://www.taobao.com","http://www.jingdong.com","http://www.tmall.com","http://www.1000phone.com"]
        var silderTime=this.silderTime
        function changeimg(){
          timer=setInterval(function(){
            currentimg++;
            let imgs=$('.slideimg')
            if(currentimg>imgs.length-1){
              currentimg=0;
            }
            for(let i=0;i<imgs.length;i++){
              imgs[i].style.zIndex=0
            }
            imgs[currentimg].style.zIndex=1;
            let lis=$('.slideli')
            for(let j=0;j<lis.length;j++){
              lis[j].style.backgroundColor=doudouColor;
            }
            lis[currentimg].style.backgroundColor=doudouHeightColor;
          },silderTime)
        }
        function stopchange(){
          window.clearInterval(timer);
        }
        function goimg(transent){
          currentimg=transent;
          let imgs=$('.slideimg');
          if(currentimg>imgs.length-1){
            currentimg=0;
          }
          for(let i=0;i<imgs.length;i++){
            imgs[i].style.zIndex=0;
          }
          imgs[currentimg].style.zIndex=1;
          let lis=$('.slideli');
          for(let j=0;j<lis.length;j++){
            lis[j].style.backgroundColor=doudouColor;
          }
          lis[currentimg].style.backgroundColor=doudouHeightColor;
        }
        function urlimg(){
          location.href=arr[currentimg];
        }
        (function lunbi(){
          initUl();
          changeimg();
          $('#basebox').onmouseover=stopchange;
          $('#basebox').onmouseout=changeimg;
          let lis=$('.slideli');
          for(let i=0;i<lis.length;i++){
            // lis[i].setAttribute("index",i);
            lis[i].onclick=function(){
              // let index=parseInt(this.getAttribute("index"));
              //如果用var，则必须提前获取lis的值，let则可以直接使用
              goimg(i);
            }
          }
          let imgs=$('.slideimg');
          for(let j=0;j<imgs.length;j++){
            imgs[j].onclick=urlimg;
          }
        })()
      }
    },
    mounted(){
      this.silder();
    }
  }
</script>

<style scoped>
  @import "../../libs/theme/slidershow.css";
</style>
