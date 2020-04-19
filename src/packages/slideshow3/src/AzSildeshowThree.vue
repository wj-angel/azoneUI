<template>
  <div>
    <!--向左滑动轮播图-->
    <div id="Leftbox" :style="{'height':+silderHeight+'px','width':+silderWidth+'px'}">
     <img class="slideimg3" v-for="b in sildershow" :src="b"/>
      <ul :style="{'left':+ulLeft+'px','bottom':+ulBottom+'px'}">
        <li class="slideli3" v-for="a in sildershow" :style="{'height':+doudouWidth+'px','width':+doudouWidth+'px'}"></li>
      </ul>
    </div>
  </div>

</template>

<script>
  export default {
    name: "AzSildeshowThree",
    props:["ulLeft","ulBottom","sildershow","silderTime","silderWidth","silderHeight","doudouHeightColor","doudouColor","doudou","doudouWidth"],
    methods:{
      silder() {
        function $(str) {
          if (str.charAt(0) == "#") {
            return document.getElementById(str.substring(1));
          } else if (str.charAt(0) == ".") {
            return document.getElementsByClassName(str.substring(1));
          } else {
            return document.getElementsByTagName(str);
          }
        }

        function getstyle(domobj, arrt) {
          if (domobj.currentStyle) {
            return domobj.currentStyle[arrt];
          } else {
            return window.getComputedStyle(domobj)[arrt];
          }
        }
        var doudouHeightColor=this.doudouHeightColor;
        var doudouColor=this.doudouColor;
        var silderTime=this.silderTime;
        var silderWidth=this.silderWidth;
        let lis=$('.slideli3')
        for(let i=0;i<lis.length;i++){
          lis[i].style.backgroundColor=doudouColor;
          lis[0].style.backgroundColor=doudouHeightColor;
        }
        function moveObj05(domObj,attr,endValue,timeLong){

          let currValue = parseFloat(getstyle(domObj,attr));//parseFloat(domObj.style[attr]);
          let direction = endValue>currValue?1:-1;
          let timeSpace = 16;
          let step = Math.abs(endValue-currValue)/timeLong*timeSpace;//  路程/时间表示的是一毫秒走多少像素*16；

          let myTimer = setInterval(function(){
            //1、改变数据
            currValue = currValue+direction*step;
            //2、处理边界
            if(Math.abs(currValue-endValue)<=step){
              currValue = endValue;
              clearInterval(myTimer);
            }
            //3、改变外观
            let temp = currValue;
            if(attr!="opacity"){
              temp = temp+"px";
            }
            domObj.style[attr] = temp;
          },timeSpace);
        }


//淡入：让某个dom元素花多长时间淡入

        function fadeIn(domObj,timeLong){
          moveObj05(domObj,"opacity",1,timeLong);
        }

//淡出：
        function fadeOut(domObj,timeLong){
          moveObj05(domObj,"opacity",0,timeLong);
        }

//淡入淡出：两张图片的淡入淡出
        function fadeInOut(inDomObj,outDomObj,timeLong){
          let endValue=1;

          let currValue = 0;
          let direction = 1;
          let timeSpace = 16;
          let step = Math.abs(endValue-currValue)/timeLong*timeSpace;//  路程/时间表示的是一毫秒走多少像素*16；

          let myTimer = setInterval(function(){
            //1、改变数据
            currValue = currValue+direction*step;
            //2、处理边界
            if(Math.abs(currValue-endValue)<=step){
              currValue = endValue;
              clearInterval(myTimer);
            }
            //3、改变外观
            inDomObj.style.opacity = currValue;
            outDomObj.style.opacity = 1-currValue;

          },timeSpace);
        }
        let timer=null;
        let currimg=0;
        function showimg(inimg,outimg){
          let imgs=$('.slideimg3');
          if(inimg==outimg){
            return;
          }
          imgs[inimg].style.left=silderWidth+'px';
          moveObj05(imgs[inimg],"left",0,silderWidth);
          moveObj05(imgs[outimg],"left",-silderWidth,silderWidth);
        }
        function showli(){
          let lis=$('.slideli3');
          for(let i=0;i<lis.length;i++){
            lis[i].style.backgroundColor=doudouColor;
          }
          lis[currimg].style.backgroundColor=doudouHeightColor;
        }
        function play(){
          timer=setInterval(function(){
            let outimg=currimg;
            let imgs=$('.slideimg3');
            currimg++;
            if(currimg>imgs.length-1){
              currimg=0;
            }
            showimg(currimg,outimg);
            showli();
          },silderTime)
        }
        function stop(){
          window.clearInterval(timer);
        }
        function goimg(transimg){
          let outimg=currimg;
          currimg=transimg;
          showimg(currimg,outimg);
          showli();
        }
        (function(){
          play();
          $('#Leftbox').onmouseover=stop;
          $('#Leftbox').onmouseout=play;
          let lis=$('.slideli3');
          for(let i=0;i<lis.length;i++){
            lis[i].setAttribute("index",i);
            lis[i].onclick=function(){
              let index=parseInt(lis[i].getAttribute("index"));
              goimg(index);
            }
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
  @import "../../libs/theme/slidershow3.css";
</style>
