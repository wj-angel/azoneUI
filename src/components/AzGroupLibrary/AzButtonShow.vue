<template>
  <div class="right-cont">
    <div class="header-cont">
      <h1>Button小组件</h1>
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
          <az-button  width="100" height="50">标准按钮</az-button>
          <az-button  disabled>禁用按钮</az-button>
          <az-button  around width="50" height="50" size="12">圆形按钮</az-button>
          <az-button  orgin >圆角按钮</az-button>
          <az-button  :bg="color">变色按钮</az-button>
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
    name: "AzButtonShow",
    data(){
      return{
        color:"red",
        table:[
        {
          title:["参数","说明","类型","可选值","默认值"],
          trs:[
            {
              tr:[
                {
                  td:["width","按钮宽度","String","—","100"]
                }
              ],
            },
            {
              tr:[
                {
                  td:["height","按钮高度","String","—","50"]
                }
              ],
            },
            {
              tr:[
                {
                  td:["disabled","是否禁用此按钮","Boolean","—","disabled"]
                }
              ],
            },
            {
              tr:[
                {
                  td:["size","按钮上面字体的大小","string","—","12"]
                }
              ],
            },
            {
              tr:[
                {
                  td:["bg","按钮的背景色","string","—","button的背景色"]
                }
              ],
            },
            {
              tr:[
                {
                  td:["around","按钮的圆角效果(circle)","Boolean","—","around"]
                }
              ],
            },
            {
              tr:[
                {
                  td:["orgin","按钮的圆角效果(ellipse)","Boolean","—","orgin"]
                }
              ],
            }
          ],
        }
      ],
        link:
          "<az-row>\n" +
          "<az-button  width=\"100\" height=\"50\">标准按钮</az-button>\n" +
          "<az-button  disabled>禁用按钮</az-button>\n" +
          "<az-button  around width=\"50\" height=\"50\" size=\"12\">圆形按钮</az-button>\n" +
          "<az-button  orgin >圆角按钮</az-button>\n" +
          "<az-button  :bg=\"color\">变色按钮</az-button>\n" +
          "</az-row>\n" +

          "data(){\n" +
          "return{\n" +
          "      color:\"red\",\n" +
          "     }\n" +
          "}\n"
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
