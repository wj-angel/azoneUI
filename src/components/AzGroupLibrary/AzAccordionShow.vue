<template>
  <div class="right-cont">
    <div class="header-cont">
      <h1>手风琴组件</h1>
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
          <az-accordion :content="content" :maskbg="maskbg"></az-accordion>
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
        name: "AzAccordionShow",
      data(){
        return{
          table:[
            {
              title:["参数","说明","类型","可选值","默认值"],
              trs:[
                {
                  tr:[
                    {
                      td:["content","手风琴插件的文本内容,蒙版的文本内容,背景色","Array","—","—"]
                    }
                  ],
                },
                {
                  tr:[
                    {
                      td:["maskbg","蒙版的透明度","String","—","rgba(0,0,0,.6)"]
                    }
                  ],
                }
              ],
            }
          ],
          content:[
            {"cn":"示例一","mask":"蒙版一","cbg":"orange"},
            {"cn":"示例二","mask":"蒙版二","cbg":"green"},
            {"cn":"示例三","mask":"蒙版三","cbg":"blue"},
            {"cn":"示例四","mask":"蒙版四","cbg":"yellow"},
            {"cn":"示例五","mask":"蒙版五","cbg":"gray"}
          ],
          maskbg:" rgba(0,0,0,.6)",
          link:"<az-row>\n" +
            "          <az-accordion :content=\"content\" :maskbg=\"maskbg\"></az-accordion>\n" +
            "</az-row>\n" +
            "data(){\n" +
            "return{\n" +
            "  content:[\n" +
            "            {\"cn\":\"示例一\",\"mask\":\"蒙版一\",\"cbg\":\"orange\"},\n" +
            "            {\"cn\":\"示例二\",\"mask\":\"蒙版二\",\"cbg\":\"green\"},\n" +
            "            {\"cn\":\"示例三\",\"mask\":\"蒙版三\",\"cbg\":\"blue\"},\n" +
            "            {\"cn\":\"示例四\",\"mask\":\"蒙版四\",\"cbg\":\"yellow\"},\n" +
            "            {\"cn\":\"示例五\",\"mask\":\"蒙版五\",\"cbg\":\"gray\"}\n" +
            "          ],\n" +
            "          maskbg:\" rgba(0,0,0,.6)\",\n" +
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
