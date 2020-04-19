<template>
  <div class="right-cont">
    <div class="header-cont">
      <h1>导航组件</h1>
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
          <az-navigation :navlis="navlis"  width="130" height="40" size="12"></az-navigation>
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
        name: "AzNavigationShow",
      data(){
        return{
          navlis:[
            {
              "http":"www.baidu.com",
              "httptext":"第一页面",
              "textul":[
                {
                  "https":"www.baidu.com",
                  "httptexts":"第一页面1",
                },
                {
                  "https":"www.baidu.com",
                  "httptexts":"第一页面2",
                },
                {
                  "https":"www.baidu.com",
                  "httptexts":"第一页面3",
                },
                {
                  "https":"www.baidu.com",
                  "httptexts":"第一页面4",
                }
              ]
            },
            {
              "http":"www.baidu.com",
              "httptext":"第二页面",
              "textul":[
                {
                  "https":"www.baidu.com",
                  "httptexts":"第二页面1",
                },
                {
                  "https":"www.baidu.com",
                  "httptexts":"第二页面2",
                },
                {
                  "https":"www.baidu.com",
                  "httptexts":"第二页面3",
                },
                {
                  "https":"www.baidu.com",
                  "httptexts":"第二页面4",
                }
              ]
            },
            {
              "http":"www.baidu.com",
              "httptext":"第三页面",
              "textul":[
                {
                  "https":"www.baidu.com",
                  "httptexts":"第三页面1",
                },
                {
                  "https":"www.baidu.com",
                  "httptexts":"第三页面2",
                },
                {
                  "https":"www.baidu.com",
                  "httptexts":"第三页面3",
                }
              ]
            },
            {
              "http":"www.baidu.com",
              "httptext":"第四页面",
              "textul":[
                {
                  "https":"www.baidu.com",
                  "httptexts":"第四页面1",
                }
              ]
            },
            {
              "http":"www.baidu.com",
              "httptext":"第五页面",
              "textul":[
                {
                  "https":"www.baidu.com",
                  "httptexts":"第五页面1",
                },
                {
                  "https":"www.baidu.com",
                  "httptexts":"第五页面2",
                },
                {
                  "https":"www.baidu.com",
                  "httptexts":"第五页面3",
                }
              ]
            },
            {
              "http":"www.baidu.com",
              "httptext":"第六页面",
              "textul":[
                {
                  "https":"www.baidu.com",
                  "httptexts":"第六页面1",
                },
                {
                  "https":"www.baidu.com",
                  "httptexts":"第六页面2",
                }
              ]
            },
            {
              "http":"www.baidu.com",
              "httptext":"第七页面",
              "textul":[
                {
                  "https":"www.baidu.com",
                  "httptexts":"第七页面1",
                },
                {
                  "https":"www.baidu.com",
                  "httptexts":"第七页面2",
                },
                {
                  "https":"www.baidu.com",
                  "httptexts":"第七页面3",
                }
                ,
                {
                  "https":"www.baidu.com",
                  "httptexts":"第七页面4",
                }
              ]
            },
            {
              "http":"www.baidu.com",
              "httptext":"第八页面",
              "textul":[
                {
                  "https":"www.baidu.com",
                  "httptexts":"第八页面1",
                },
                {
                  "https":"www.baidu.com",
                  "httptexts":"第八页面2",
                }
              ]
            }
          ],
          table:[
            {
              title:["参数","说明","类型","可选值","默认值"],
              trs:[
                {
                  tr:[
                    {
                      td:["navlis","导航页面及其导航分页面的href,文本内容","Array","—","—"]
                    }
                  ],
                },
                {
                  tr:[
                    {
                      td:["width","导航宽度","String","—","—"]
                    }
                  ],
                },
                {
                  tr:[
                    {
                      td:["height","导航高度","string","—","—"]
                    }
                  ],
                },
                {
                  tr:[
                    {
                      td:["colors","导航字体颜色","string","—","—"]
                    }
                  ],
                },
                {
                  tr:[
                    {
                      td:["size","导航的字体大小","String","—","—"]
                    }
                  ],
                }
              ],
            }
          ],
          link:"<az-row>\n" +
            "          <az-navigation :navlis=\"navlis\"></az-navigation>\n" +
            "</az-row>\n" +
            "data(){\n" +
            "return{\n" +
            "  navlis:[\n" +
            "        {\n" +
            "          \"http\":\"www.baidu.com\",\n" +
            "          \"httptext\":\"第一页面\",\n" +
            "          \"textul\":[\n" +
            "            {\n" +
            "              \"https\":\"www.baidu.com\",\n" +
            "              \"httptexts\":\"第一页面1\",\n" +
            "            },\n" +
            "            {\n" +
            "              \"https\":\"www.baidu.com\",\n" +
            "              \"httptexts\":\"第一页面2\",\n" +
            "            },\n" +
            "            {\n" +
            "              \"https\":\"www.baidu.com\",\n" +
            "              \"httptexts\":\"第一页面3\",\n" +
            "            },\n" +
            "            {\n" +
            "              \"https\":\"www.baidu.com\",\n" +
            "              \"httptexts\":\"第一页面4\",\n" +
            "            }\n" +
            "          ]\n" +
            "        },\n" +
            "        {\n" +
            "          \"http\":\"www.baidu.com\",\n" +
            "          \"httptext\":\"第二页面\",\n" +
            "          \"textul\":[\n" +
            "            {\n" +
            "              \"https\":\"www.baidu.com\",\n" +
            "              \"httptexts\":\"第二页面1\",\n" +
            "            },\n" +
            "            {\n" +
            "              \"https\":\"www.baidu.com\",\n" +
            "              \"httptexts\":\"第二页面2\",\n" +
            "            },\n" +
            "            {\n" +
            "              \"https\":\"www.baidu.com\",\n" +
            "              \"httptexts\":\"第二页面3\",\n" +
            "            },\n" +
            "            {\n" +
            "              \"https\":\"www.baidu.com\",\n" +
            "              \"httptexts\":\"第二页面4\",\n" +
            "            }\n" +
            "          ]\n" +
            "        },\n" +
            "        {\n" +
            "          \"http\":\"www.baidu.com\",\n" +
            "          \"httptext\":\"第三页面\",\n" +
            "          \"textul\":[\n" +
            "            {\n" +
            "              \"https\":\"www.baidu.com\",\n" +
            "              \"httptexts\":\"第三页面1\",\n" +
            "            },\n" +
            "            {\n" +
            "              \"https\":\"www.baidu.com\",\n" +
            "              \"httptexts\":\"第三页面2\",\n" +
            "            },\n" +
            "            {\n" +
            "              \"https\":\"www.baidu.com\",\n" +
            "              \"httptexts\":\"第三页面3\",\n" +
            "            }\n" +
            "          ]\n" +
            "        },\n" +
            "        {\n" +
            "          \"http\":\"www.baidu.com\",\n" +
            "          \"httptext\":\"第四页面\",\n" +
            "          \"textul\":[\n" +
            "            {\n" +
            "              \"https\":\"www.baidu.com\",\n" +
            "              \"httptexts\":\"第四页面1\",\n" +
            "            }\n" +
            "          ]\n" +
            "        },\n" +
            "        {\n" +
            "          \"http\":\"www.baidu.com\",\n" +
            "          \"httptext\":\"第五页面\",\n" +
            "          \"textul\":[\n" +
            "            {\n" +
            "              \"https\":\"www.baidu.com\",\n" +
            "              \"httptexts\":\"第五页面1\",\n" +
            "            },\n" +
            "            {\n" +
            "              \"https\":\"www.baidu.com\",\n" +
            "              \"httptexts\":\"第五页面2\",\n" +
            "            },\n" +
            "            {\n" +
            "              \"https\":\"www.baidu.com\",\n" +
            "              \"httptexts\":\"第五页面3\",\n" +
            "            }\n" +
            "          ]\n" +
            "        },\n" +
            "        {\n" +
            "          \"http\":\"www.baidu.com\",\n" +
            "          \"httptext\":\"第六页面\",\n" +
            "          \"textul\":[\n" +
            "            {\n" +
            "              \"https\":\"www.baidu.com\",\n" +
            "              \"httptexts\":\"第六页面1\",\n" +
            "            },\n" +
            "            {\n" +
            "              \"https\":\"www.baidu.com\",\n" +
            "              \"httptexts\":\"第六页面2\",\n" +
            "            }\n" +
            "          ]\n" +
            "        },\n" +
            "        {\n" +
            "          \"http\":\"www.baidu.com\",\n" +
            "          \"httptext\":\"第七页面\",\n" +
            "          \"textul\":[\n" +
            "            {\n" +
            "              \"https\":\"www.baidu.com\",\n" +
            "              \"httptexts\":\"第七页面1\",\n" +
            "            },\n" +
            "            {\n" +
            "              \"https\":\"www.baidu.com\",\n" +
            "              \"httptexts\":\"第七页面2\",\n" +
            "            },\n" +
            "            {\n" +
            "              \"https\":\"www.baidu.com\",\n" +
            "              \"httptexts\":\"第七页面3\",\n" +
            "            }\n" +
            "            ,\n" +
            "            {\n" +
            "              \"https\":\"www.baidu.com\",\n" +
            "              \"httptexts\":\"第七页面4\",\n" +
            "            }\n" +
            "          ]\n" +
            "        },\n" +
            "        {\n" +
            "          \"http\":\"www.baidu.com\",\n" +
            "          \"httptext\":\"第八页面\",\n" +
            "          \"textul\":[\n" +
            "            {\n" +
            "              \"https\":\"www.baidu.com\",\n" +
            "              \"httptexts\":\"第八页面1\",\n" +
            "            },\n" +
            "            {\n" +
            "              \"https\":\"www.baidu.com\",\n" +
            "              \"httptexts\":\"第八页面2\",\n" +
            "            }\n" +
            "          ]\n" +
            "        }\n" +
            "      ],\n" +
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
