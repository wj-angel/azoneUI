<template>
  <div>
    <div class="content">
      <div class="newcontent">
        <div class="newheader">
          <h3>{{formhead}}</h3>
        </div>
        <div class="newform">
          <div class="newformleft">
            <div class="container">
              <form>
                <div class="box">
                  <label>{{formname}}:</label>
                  <input type="text" class="newinput">
                </div>
                <div class="box">
                  <label>{{currentaddress}}:</label>
                  <div class="userselect">
                    <select>
                      <option v-for="i in selects">{{i}}</option>
                    </select>
                  </div>
                </div>
                <div class="box">
                  <label>{{companyaddress}}:</label>
                  <input type="text" class="newinput">
                </div>
                <div class="box">
                  <label>{{email}}:</label>
                  <input type="text" class="newinput">
                </div>
                <div class="box">
                  <label>{{Mobilephonenumber}}:</label>
                  <input type="text" class="newinput">
                </div>
                <div class="box">
                  <label>{{QQno}}:</label>
                  <input type="text" class="newinput">
                </div>
                <div class="box">
                  <label>{{homeaddress}}:</label>
                  <div class="useraddress">
                    <input type="text" class="newinput heihei" placeholder="街道地址">
                    <input type="text" class="newinput smalll" placeholder="城市">
                    <input type="text" class="newinput smalll" placeholder="区">
                    <input type="text" class="newinput smalll last" placeholder="邮政编码">
                  </div>
                </div>
                <div class="box textarea">
                  <label>备注:</label>
                  <textarea class="usertext"></textarea>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import  "../../libs/jquery.min"
  export default {
    name: "AzTheForm",
    props:{
      formhead:{
        type:String,
        default:""
      },
      formname:{
        type: String,
        default: ""
      },
      currentaddress:{
        type:String,
        default:""
      },
      companyaddress:{
        type:String,
        default:""
      },
      email:{
        type:String,
        default:''
      },
      Mobilephonenumber:{
        type:String,
        default:""
      },
      QQno:{
        type:String,
        default:''
      },
      homeaddress:{
        type:String,
        default:""
      },
      selects:{
        type:Array,
        default:["西安市","河北省","北京市","天津市","上海市","黑龙江市","银川市"]
      }
    }
  }
</script>

<style scoped>
  @import "../../libs/theme/theform.css";
</style>
