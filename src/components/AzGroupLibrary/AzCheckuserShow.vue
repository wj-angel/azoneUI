<template>
  <div class="right-cont">
    <div class="header-cont">
      <h1>登录验证组件</h1>
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
          <az-yzm-foure>
            <az-row :style="{height:'50px',width:'240px',margin:'0 auto'}">
              <az-button  id="resetBtn2" :style="{float:'left'}" width="100" height="25">重置</az-button>
              <az-button  id="getState2" :style="{float:'left'}" width="100" height="25">获取验证状态</az-button>
            </az-row>
          </az-yzm-foure>
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
        name: "AzCheckuserShow",
      data(){
        return{
          table:[
            {
              title:["参数","说明","类型","可选值","默认值"],
              trs:[
                {
                  tr:[
                    {
                      td:["height","登陆验证高度","String","—","—"]
                    }
                  ],
                },
                {
                  tr:[
                    {
                      td:["width","登陆验证宽度","String","—","—"]
                    }
                  ],
                },
                {
                  tr:[
                    {
                      td:["margin","登陆验证组件在页面中位置","String","—","—"]
                    }
                  ],
                }
              ],
            }
          ],
          link:"<az-row>\n" +
            "<az-yzm-foure>\n" +
            "<az-row :style=\"{height:'50px',width:'240px',margin:'0 auto'}\">\n" +
            "<az-button :val=\"name1\" id=\"resetBtn2\" :style=\"{float:'left'}\"></az-button>\n" +
            "<az-button :val=\"name2\" id=\"getState2\" :style=\"{float:'left'}\"></az-button>\n" +
            "</az-row>\n" +
            "</az-yzm-foure>\n" +
            "</az-row>\n"+
            "data(){\n" +
            "return{\n" +
            "  name1:\"重置\",\n" +
            "          name2:\"获取验证状态\",,\n" +
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
