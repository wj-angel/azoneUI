<template>
  <div class="right-cont">
    <div class="header-cont">
      <h1>表单组件</h1>
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
          <az-the-form :formhead="formhead" :formname="formname" :currentaddress="currentaddress" :companyaddress="companyaddress" :email="email" :Mobilephonenumber="Mobilephonenumber" :QQno="QQno" :homeaddress="homeaddress" :selects="selects"></az-the-form>
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
        name: "AzTheFormShow",
        data(){
        return{
          formhead:"请填写以下内容",
          formname:"姓名",
          currentaddress:"目前的住址",
          companyaddress:"公司的地址",
          email:"电子邮箱",
          Mobilephonenumber:"手机号码",
          QQno:"QQ号",
          homeaddress:"家庭住址",
          selects:["西安市","河北省","北京市","天津市","上海市","黑龙江市","银川市"],
          link:"<az-row>\n" +
            "          <az-the-form :formhead=\"formhead\" :formname=\"formname\" :currentaddress=\"currentaddress\" :companyaddress=\"companyaddress\" :email=\"email\" :Mobilephonenumber=\"Mobilephonenumber\" :QQno=\"QQno\" :homeaddress=\"homeaddress\" :selects=\"selects\"></az-the-form>\n" +
            "</az-row>\n" +
            "data(){\n" +
            "return{\n" +
            "      formhead:\"请填写以下内容\",\n" +
            "      formname:\"姓名\",\n" +
            "      currentaddress:\"目前的住址\",\n" +
            "      companyaddress:\"公司的地址\",\n" +
            "      email:\"电子邮箱\",\n" +
            "      Mobilephonenumber:\"手机号码\",\n" +
            "      QQno:\"QQ号\",\n" +
            "      homeaddress:\"家庭住址\",\n" +
            "      selects:[\"西安市\",\"河北省\",\"北京市\",\"天津市\",\"上海市\",\"黑龙江市\",\"银川市\"]\n" +
            "     }\n" +
            "}\n",
          table:[
            {
              title:["参数","说明","类型","可选值","默认值"],
              trs:[
                {
                  tr:[
                    {
                      td:["formhead","标题行","String","—","请填写以下内容"]
                    }
                  ],
                },
                {
                  tr:[
                    {
                      td:["formname","表单属性","String","—","姓名"]
                    }
                  ],
                },
                {
                  tr:[
                    {
                      td:["currentaddress","表单属性","String","—","目前的住址"]
                    }
                  ],
                },
                {
                  tr:[
                    {
                      td:["companyaddress","表单属性","string","—","公司的地址"]
                    }
                  ],
                },
                {
                  tr:[
                    {
                      td:["email","表单属性","string","—","电子邮箱"]
                    }
                  ],
                },
                {
                  tr:[
                    {
                      td:["Mobilephonenumber","表单属性","String","—","手机号码"]
                    }
                  ],
                },
                {
                  tr:[
                    {
                      td:["QQno","表单属性","String","—","QQno"]
                    }
                  ],
                },
                {
                  tr:[
                    {
                      td:["homeaddress","表单属性","String","—","家庭住址"]
                    }
                  ],
                },
                {
                  tr:[
                    {
                      td:["selects","表单中select选择的文本内容","String","—","(西安市|河北省|北京市|天津市|上海市|黑龙江市|银川市)"]
                    }
                  ],
                },
              ],
            }
          ]
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
