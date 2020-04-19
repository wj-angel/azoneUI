<template>
  <div class="right-cont">
    <div class="header-cont">
      <h1>轮播图组件</h1>
    </div>
    <div class="info-side">
      <h1>基础用法</h1>
      <p class="show">例：复制下列代码到所需页面(<a href="javascript:;">点击查看代码</a> )</p>
      <pre class="hlj" v-highlight-a>
        <code class="hjsb">{{link}}</code>
      </pre>
    </div>
    <div class="info-side">
      <h1>展示效果:</h1>
      <div class="hljsl">
        <az-row>
          <!--基础轮播图-->
          <az-sildeshow-one :ulLeft="ulLeft" :ulBottom="ulBottom" :sildershow="sildershow" :silderTime="silderTime" :silderWidth="silderWidth" :silderHeight="silderHeight" :doudouHeightColor="doudouHeightColor" :doudouColor="doudouColor" doudou="doudou" :doudouWidth="doudouWidth"></az-sildeshow-one>
        </az-row>
        <az-row :style="{padding:'20px 0'}">
        <!--淡入淡出轮播图-->
        <!--<az-sildeshow-two :ulLeft="ulLeft" :ulBottom="ulBottom" :sildershow="sildershow" :silderTime="silderTime" :silderWidth="silderWidth" :silderHeight="silderHeight" :doudouHeightColor="doudouHeightColor" :doudouColor="doudouColor" doudou="doudou" :doudouWidth="doudouWidth"></az-sildeshow-two>-->
        </az-row>
        <az-row>
          <!--划入划出轮播图-->
        <az-sildeshow-three :ulLeft="ulLeft" :ulBottom="ulBottom" :sildershow="sildershow" :silderTime="silderTime" :silderWidth="silderWidth" :silderHeight="silderHeight" :doudouHeightColor="doudouHeightColor" :doudouColor="doudouColor" doudou="doudou" :doudouWidth="doudouWidth"></az-sildeshow-three>
        </az-row>
      </div>
    </div>
    <div class="info-side">
      <h1>参数:</h1>
      <div class="hljsl">
        <az-api :table="table"></az-api>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "AzSliderSomeShow",
      data(){
        return{
          sildershow:[ require("../../packages/libs/images/slidershow1.jpg"),require("../../packages/libs/images/slidershow2.jpg"),require("../../packages/libs/images/slidershow3.jpg"),require("../../packages/libs/images/slidershow4.jpg"),require("../../packages/libs/images/slidershow5.jpg"),require("../../packages/libs/images/slidershow6.jpg"),require("../../packages/libs/images/slidershow2.jpg")],
          silderTime:"1500",
          silderWidth:"300",
          silderHeight:"200",
          doudouHeightColor:"red",
          doudouColor:"#efefef",
          doudouWidth:10,
          ulLeft:"50",
          ulBottom:"10",
          table:[
            {
              title:["参数","说明","类型","可选值","默认值"],
              trs:[
                {
                  tr:[
                    {
                      td:["sildershow","轮播图图片数组","Array","—","—"]
                    }
                  ],
                },
                {
                  tr:[
                    {
                      td:["sildershow","轮播图图片数组","Array","—","—"]
                    }
                  ],
                },
                {
                  tr:[
                    {
                      td:["silderWidth","轮播图的宽度","string","—","—"]
                    }
                  ],
                },
                {
                  tr:[
                    {
                      td:["silderHeight","轮播图的高度","string","—","—"]
                    }
                  ],
                },
                {
                  tr:[
                    {
                      td:["doudouHeightColor","轮播豆豆的高亮颜色","string","—","—"]
                    }
                  ],
                },
                {
                  tr:[
                    {
                      td:["doudouColor","轮播豆豆的颜色","string","—","—"]
                    }
                  ],
                },
                {
                  tr:[
                    {
                      td:["doudouWidth","轮播豆豆的宽高","string","—","—"]
                    }
                  ],
                },
                {
                  tr:[
                    {
                      td:["ulLeft","轮播豆豆距离轮播图的左边距","string","—","—"]
                    }
                  ],
                },
                {
                  tr:[
                    {
                      td:["ulBottom","轮播豆豆距离轮播图的左边距","string","—","—"]
                    }
                  ],
                }
              ],
            }
          ],
          link:" <az-row>\n" +
            "          基础轮播图\n" +
            "          <az-sildeshow-one :ulLeft=\"ulLeft\" :ulBottom=\"ulBottom\" :sildershow=\"sildershow\" :silderTime=\"silderTime\" :silderWidth=\"silderWidth\" :silderHeight=\"silderHeight\" :doudouHeightColor=\"doudouHeightColor\" :doudouColor=\"doudouColor\" doudou=\"doudou\" :doudouWidth=\"doudouWidth\"></az-sildeshow-one>\n" +
            "        </az-row>\n" +
            "        <az-row :style=\"{padding:'20px 0'}\">\n" +
            "        淡入淡出轮播图\n" +
            "        <az-sildeshow-two :ulLeft=\"ulLeft\" :ulBottom=\"ulBottom\" :sildershow=\"sildershow\" :silderTime=\"silderTime\" :silderWidth=\"silderWidth\" :silderHeight=\"silderHeight\" :doudouHeightColor=\"doudouHeightColor\" :doudouColor=\"doudouColor\" doudou=\"doudou\" :doudouWidth=\"doudouWidth\"></az-sildeshow-two>\n" +
            "        </az-row>\n" +
            "        <az-row>\n" +
            "          划入划出轮播图\n" +
            "        <az-sildeshow-three :ulLeft=\"ulLeft\" :ulBottom=\"ulBottom\" :sildershow=\"sildershow\" :silderTime=\"silderTime\" :silderWidth=\"silderWidth\" :silderHeight=\"silderHeight\" :doudouHeightColor=\"doudouHeightColor\" :doudouColor=\"doudouColor\" doudou=\"doudou\" :doudouWidth=\"doudouWidth\"></az-sildeshow-three>\n" +
            "        </az-row>\n" +
            "data(){\n" +
            "return{\n" +
            "  sildershow:[ require(\"../../packages/libs/images/slidershow1.jpg\"),require(\"../../packages/libs/images/slidershow2.jpg\"),require(\"../../packages/libs/images/slidershow3.jpg\"),require(\"../../packages/libs/images/slidershow4.jpg\"),require(\"../../packages/libs/images/slidershow5.jpg\"),require(\"../../packages/libs/images/slidershow6.jpg\"),require(\"../../packages/libs/images/slidershow2.jpg\")],\n" +
            "          silderTime:\"1500\",\n" +
            "          silderWidth:\"300\",\n" +
            "          silderHeight:\"200\",\n" +
            "          doudouHeightColor:\"red\",\n" +
            "          doudouColor:\"#efefef\",\n" +
            "          doudouWidth:10,\n" +
            "          ulLeft:\"50\",\n" +
            "          ulBottom:\"10\",\n" +
            "     }\n" +
            "}\n",
        }
      }
    }
</script>

<style scoped>
  .right-cont{
    width: 100%;
    height: 100%;
  }
  .header-cont{
    width: 100%;
    height: 68px;
    background-color: hsla(0,0%,100%,.8);
    border: 1px solid #eee;
    border-radius: 4px;
    margin-bottom: 22px;
    padding: 0 20px;
  }
  .header-cont h1{
    font-size: 20px;
    font-weight: 600;
    text-align: left;
    line-height: 68px;
  }
  .info-side{
    height: auto;
    background-color: hsla(0,0%,100%,.8);
    border: 1px solid #eee;
    border-radius: 4px;
    margin-bottom: 20px;
  }
  .info-side h1{
    font-size: 25px;
    line-height: 50px;
    padding: 0 20px;
  }
  .info-side-cont h2{
    background-color: hsla(0,0%,100%,.9);
    font-size: 20px;
    line-height: 20px;
    padding: 10px;
  }
  .info-side p{
    background-color: #fff;
    font-size: 10px;
    line-height: 20px;
  }
  .show{
    cursor: pointer;
  }
  .show a{
    color: #c71585;
    font-size: 10px;
    line-height: 20px;
  }
  .show a:hover{
    text-decoration: underline;
  }
  .hlj{
    -ms-word-wrap: normal;
    padding: 5px;
    font-size: 14px;
    background-color: #fff;
    overflow: hidden;
    color: #3a3a3a;
    display: none;
  }
  .hljsl{
    width: 100%;
    height:auto;
    background-color:#fff;
    margin-bottom:.15rem;
    position: relative;
    min-height: 200px;
    _height:200px;
  }
</style>
