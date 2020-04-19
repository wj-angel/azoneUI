<template>
  <div class="right-cont">
    <div class="header-cont">
      <h1>静态表格组件</h1>
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
          <az-table :theadtext="theadtext" :tbodytext="tbodytext" ></az-table>
          <az-table-second :stheadtext="stheadtext" :stbodytext="stbodytext"></az-table-second>
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
        name: "AzTableShow",
      data(){
        return{
          table:[
            {
              title:["参数","说明","类型","可选值","默认值"],
              trs:[
                {
                  tr:[
                    {
                      td:["theadtext","静态表格表头的内容","Array","—","—"]
                    }
                  ],
                },
                {
                  tr:[
                    {
                      td:["tbodytext","静态表格内部的文本内容","Array","—","—"]
                    }
                  ],
                },
                {
                  tr:[
                    {
                      td:["stheadtext","有全选功能表格的表头内容","Array","—","—"]
                    }
                  ],
                },
                {
                  tr:[
                    {
                      td:["stbodytext","有全选功能表格内部的文本内容","Array","—","—"]
                    }
                  ],
                }
              ],
            }
          ],
          theadtext:["ID","产品名称","总价","优惠","订单时间","所属类型","数量","状态","操作"],
          tbodytext:[
              {
                texts:["text","text","text","text","text","text","text","text","text"]
              },
              {
                texts:["text","text","text","text","text","text","text","text","text"]
              },
              {
                texts:["text","text","text","text","text","text","text","text","text"]
              },
              {
                texts:["text","text","text","text","text","text","text","text","text"]
              }
          ],
          stheadtext:["ID","产品名称","总价","优惠","订单时间","所属类型","数量","状态","操作"],
          stbodytext:[
            {
              texts:["text","text","text","text","text","text","text","text","text"]
            },
            {
              texts:["text","text","text","text","text","text","text","text","text"]
            },
            {
              texts:["text","text","text","text","text","text","text","text","text"]
            },
            {
              texts:["text","text","text","text","text","text","text","text","text"]
            }
          ],
          link:"<az-row>\n" +
            "          <az-table :theadtext=\"theadtext\" :tbodytext=\"tbodytext\"></az-table>\n" +
            "          <az-table-second :stheadtext=\"stheadtext\" :stbodytext=\"stbodytext\" ></az-table-second>\n" +
            "</az-row>\n" +
            "data(){\n" +
            "return{\n" +
            "  theadtext:[\"ID\",\"产品名称\",\"总价\",\"优惠\",\"订单时间\",\"所属类型\",\"数量\",\"状态\",\"操作\"],\n" +
            "          tbodytext:[\n" +
            "              {\n" +
            "                texts:[\"text\",\"text\",\"text\",\"text\",\"text\",\"text\",\"text\",\"text\",\"text\"]\n" +
            "              },\n" +
            "              {\n" +
            "                texts:[\"text\",\"text\",\"text\",\"text\",\"text\",\"text\",\"text\",\"text\",\"text\"]\n" +
            "              },\n" +
            "              {\n" +
            "                texts:[\"text\",\"text\",\"text\",\"text\",\"text\",\"text\",\"text\",\"text\",\"text\"]\n" +
            "              },\n" +
            "              {\n" +
            "                texts:[\"text\",\"text\",\"text\",\"text\",\"text\",\"text\",\"text\",\"text\",\"text\"]\n" +
            "              }\n" +
            "          ],\n" +
            "          stheadtext:[\"ID\",\"产品名称\",\"总价\",\"优惠\",\"订单时间\",\"所属类型\",\"数量\",\"状态\",\"操作\"],\n" +
            "          stbodytext:[\n" +
            "            {\n" +
            "              texts:[\"text\",\"text\",\"text\",\"text\",\"text\",\"text\",\"text\",\"text\",\"text\"]\n" +
            "            },\n" +
            "            {\n" +
            "              texts:[\"text\",\"text\",\"text\",\"text\",\"text\",\"text\",\"text\",\"text\",\"text\"]\n" +
            "            },\n" +
            "            {\n" +
            "              texts:[\"text\",\"text\",\"text\",\"text\",\"text\",\"text\",\"text\",\"text\",\"text\"]\n" +
            "            },\n" +
            "            {\n" +
            "              texts:[\"text\",\"text\",\"text\",\"text\",\"text\",\"text\",\"text\",\"text\",\"text\"]\n" +
            "            }\n" +
            "          ],\n" +
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
