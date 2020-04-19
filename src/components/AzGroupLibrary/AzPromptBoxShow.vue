<template>
  <div class="right-cont">
    <div class="header-cont">
      <h1>提示框组件</h1>
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
          <az-prompt-box :tooltiptext1="tooltiptext1" :tooltiptext2="tooltiptext2" :tooltip1="tooltip1" :tooltip2="tooltip2"></az-prompt-box>
        </az-row>
        <az-row>
          <az-prompt-box-second   pbstext="你好，我是提示框" :pbsatext="pbsatext"></az-prompt-box-second>
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
        name: "AzPromptBoxShow",
        data(){
        return{
          table:[
            {
              title:["参数","说明","类型","可选值","默认值"],
              trs:[
                {
                  tr:[
                    {
                      td:["tooltiptext1","第一个提示框鼠标未浮上元素的内容","String","—","—"]
                    }
                  ],
                },
                {
                  tr:[
                    {
                      td:["tooltip1","第一个提示框鼠标浮上显示的内容","String","—","—"]
                    }
                  ],
                },
                {
                  tr:[
                    {
                      td:["tooltiptext2","第二个提示框鼠标未浮上元素的内容","String","—","—"]
                    }
                  ],
                },
                {
                  tr:[
                    {
                      td:["tooltip2","第一个提示框鼠标浮上显示的内容","String","—","—"]
                    }
                  ],
                },
                {
                  tr:[
                    {
                      td:["pbsatext","第三个提示框鼠标未浮上文本内容","string","—","—"]
                    }
                  ],
                },
                {
                  tr:[
                    {
                      td:["pbstext","第三个提示框鼠标浮上显示的内容","string","—","—"]
                    }
                  ],
                }
              ],
            }
          ],
          tooltiptext1:"quasar",
          tooltiptext2:"Euclid",
          tooltip1:"You are believed to be powered by accretion of material into supermassive black holes in the nuclei of distant 		galaxies, making these luminous versions of the general...",
          tooltip2:"You also known as Euclid of Alexandria, was a Greek mathematician, often referred to as the \"Father of Geometry\". He 		was active in Alexandria during the reign of Ptolemy I.",
          pbsatext:"鼠标悬浮在我身上试试",
          link:"<az-row>\n" +
            "         <az-row>\n" +
            "             <az-prompt-box :tooltiptext1=\"tooltiptext1\" :tooltiptext2=\"tooltiptext2\" :tooltip1=\"tooltip1\" :tooltip2=\"tooltip2\"></az-prompt-box>\n" +
            "        </az-row>\n" +
            "        <az-row>\n" +
            "             <az-prompt-box-second   pbstext=\"你好，我是提示框\" :pbsatext=\"pbsatext\"></az-prompt-box-second>\n" +
            "        </az-row>\n" +
            "</az-row>\n" +
            "data(){\n" +
            "return{\n" +
            "          tooltiptext1:\"quasar\",\n" +
            "          tooltiptext2:\"Euclid\",\n" +
            "          tooltip1:\"You are believed to be powered by accretion of material into supermassive black holes in the nuclei of distant \t\tgalaxies, making these luminous versions of the general...\",\n" +
            "          tooltip2:\"You also known as Euclid of Alexandria, was a Greek mathematician, often referred to as the \\\"Father of Geometry\\\". He \t\twas active in Alexandria during the reign of Ptolemy I.\",\n" +
            "          pbsatext:\"鼠标悬浮在我身上试试\",\n" +
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
