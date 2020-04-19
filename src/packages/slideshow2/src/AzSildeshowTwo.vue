<template>
  <div>
    <!--淡入淡出轮播图-->
    <div id="fadebox" :style="{'height':+silderHeight+'px','width':+silderWidth+'px'}">
      <img class="slideimg2" v-for="b in sildershow" :src="b"/>
      <ul class="slideul2" :style="{'left':+ulLeft+'px','bottom':+ulBottom+'px'}">
        <li class="slideli2" v-for="a in sildershow" :style="{'height':+doudouWidth+'px','width':+doudouWidth+'px'}"></li>
      </ul>
    </div>
  </div>

</template>

<script>
  export default {
    name: "AzSildeshowTwo",
    props:["ulLeft","ulBottom","sildershow","silderTime","silderWidth","silderHeight","doudouHeightColor","doudouColor","doudou","doudouBgcolor","doudouWidth"],
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
        let lis=$('.slideli2')
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
        //当前序号
        let currimg=0;
        let timer=null;
        //显示图片：
        function showimg(inimg,outimg){
          if(inimg==outimg){
            return;
          }
          let imgs=$('.slideimg2');
          imgs[inimg].style.opacity=0;
          imgs[outimg].style.opacity=1;
          fadeInOut(imgs[inimg],imgs[outimg],silderTime);
        }

        function showli(){
          let lis=$(".slideli2");
          for(let i=0;i<lis.length;i++){
            lis[i].style.backgroundColor=doudouColor;
          }
          lis[currimg].style.backgroundColor=doudouHeightColor;
        }

        //1、自动播放图片
        function play(){
          timer=setInterval(function(){
            let outimg=currimg;
            currimg++;
            let imgs=$('.slideimg2');
            if(currimg>imgs.length-1){
              currimg=0;
            }
            showimg(currimg,outimg);
            showli();
          },silderTime)
        }

        //2、停止播放
        function stop(){
          window.clearInterval(timer);
        }

        //4、跳转到指定的图片
        function goimg(transimg){
          let outimg=currimg;
          currimg=transimg;
          showimg(currimg,outimg);
          showli();
        }

        (function(){
          play();
          $('#fadebox').onmouseover=stop;
          $('#fadebox').onmouseout=play;
          let lis=$('.slideli2');
          for(let i=0;i<lis.length;i++){
            lis[i].setAttribute("index",i);
            lis[i].onclick=function(){
              let index=lis[i].getAttribute("index",1);
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
  @import "../../libs/theme/slidershow2.css";
</style>
