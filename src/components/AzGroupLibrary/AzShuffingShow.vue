<template>
  <div class="right-cont">
    <div class="header-cont">
      <h1>动画组件</h1>
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
          <az-three-shuffing :img1="img1" :img2="img2" :img3="img3" :img4="img4" :img5="img5" :img6="img6" :bg="color"></az-three-shuffing>
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
        name: "AzShuffingShow",
      data(){
        return{
          color:"skyblue",
          img1: require("../../packages/libs/images/az_shuffing1.png"),
          img2: require("../../packages/libs/images/az_shuffing2.png"),
          img3: require("../../packages/libs/images/az_shuffing3.png"),
          img4: require("../../packages/libs/images/az_shuffing4.png"),
          img5: require("../../packages/libs/images/az_shuffing5.png"),
          img6: require("../../packages/libs/images/az_shuffing6.png"),
          table:[
            {
              title:["参数","说明","类型","可选值","默认值"],
              trs:[
                {
                  tr:[
                    {
                      td:["img1","图片","String","—","—"]
                    }
                  ],
                },
                {
                  tr:[
                    {
                      td:["img2","图片","String","—","—"]
                    }
                  ],
                },
                {
                  tr:[
                    {
                      td:["img3","图片","String","—","—"]
                    }
                  ],
                },
                {
                  tr:[
                    {
                      td:["img4","图片","String","—","—"]
                    }
                  ],
                },
                {
                  tr:[
                    {
                      td:["img5","图片","String","—","—"]
                    }
                  ],
                },
                {
                  tr:[
                    {
                      td:["img6","图片","String","—","—"]
                    }
                  ],
                },
                {
                  tr:[
                    {
                      td:["bg","动画上面豆豆的背景色","String","—","—"]
                    }
                  ],
                }
              ],
            }
          ],
          link:"<az-row>\n" +
            "          <az-three-shuffing :img1=\"img1\" :img2=\"img2\" :img3=\"img3\" :img4=\"img4\" :img5=\"img5\" :img6=\"img6\" drug=\"drugs\"></az-three-shuffing>\n" +
            "</az-row>\n" +
            "data(){\n" +
            "return{\n" +
            "          img1: require(\"../../packages/libs/images/az_shuffing1.png\"),\n" +
            "      img2: require(\"../../packages/libs/images/az_shuffing2.png\"),\n" +
            "      img3: require(\"../../packages/libs/images/az_shuffing3.png\"),\n" +
            "      img4: require(\"../../packages/libs/images/az_shuffing4.png\"),\n" +
            "      img5: require(\"../../packages/libs/images/az_shuffing5.png\"),\n" +
            "      img6: require(\"../../packages/libs/images/az_shuffing6.png\"),\n" +
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
