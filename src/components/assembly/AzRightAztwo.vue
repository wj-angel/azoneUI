<template>
  <div class="right-cont">
    <div class="header-cont">
      <h1>使用</h1>
    </div>
    <div class="info-side">
      <h1>使用流程</h1>
      <div class="info-side-cont">
        <h2>按需引入</h2>
        <p>Azone-ui 支持完整引入或者根据需要引入部分组件。 我们先介绍如何完整引入 Azone-ui，后介绍部分引入 Azone-ui。</p>
      </div>
    </div>
    <div class="info-side">
      <h1>完全引入</h1>
      <p>例：复制下列代码到所需页面</p>
      <pre class="hljs">
        <code>{{link}}</code>
      </pre>
    </div>
    <div class="info-side">
      <h1>展示效果:</h1>
      <div class="hljs">
        <az-row>
          <az-button  width="100" height="50">标准按钮</az-button>
          <az-button  disabled>禁用按钮</az-button>
          <az-button  around width="50" height="50" size="12">圆形按钮</az-button>
          <az-button  orgin >圆角按钮</az-button>
          <az-button  :bg="color">变色按钮</az-button>
        </az-row>
      </div>
    </div>
  </div>
</template>

<script>
    import AzRightInput from "./AzRightInput";
    import AzButtonShow from "../AzGroupLibrary/AzButtonShow";
    export default {
        name: "AzRightAztwo",
      components: {AzButtonShow, AzRightInput},
      data(){
        return{
          color:"red",
          link:
            "         <az-row>\n" +
            "          <az-button  width=\"100\" height=\"50\">标准按钮</az-button>\n" +
            "          <az-button  disabled>禁用按钮</az-button>\n" +
            "          <az-button  around width=\"50\" height=\"50\" size=\"12\">圆形按钮</az-button>\n" +
            "          <az-button  orgin >圆角按钮</az-button>\n" +
            "          <az-button  :bg=\"color\">变色按钮</az-button>\n" +
            "        </az-row>\n" +

            "        data(){\n" +
            "          return{\n" +
            "             color:\"red\",\n" +
            "                }\n" +
            "             }\n",
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
    font-size: 16px;
    line-height: 50px;
    padding: 0 20px;
  }
  .info-side-cont{
    height: auto;
    background-color: hsla(0,0%,100%,.5);
    padding: 10px;
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
  .hljs{
    -ms-word-wrap: normal;
    padding: 5px;
    overflow: auto;
    font-size: 14px;
    line-height: 20px;
    background-color: #fff;
    margin-bottom: 20px;
    color: #3a3a3a;
  }
</style>
