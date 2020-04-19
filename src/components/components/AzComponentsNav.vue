<template>
    <nav>
        <div class="tab">
            <div class="tabs">
                <div class="tab_menu">
                    <div>
                      <div>
                          <div class="basics">开发者指南</div>
                      </div>
                      <ul>
                        <li class="selected"><a href="javascript:;">安装</a></li>
                        <li><a href="javascript:;">使用</a></li>
                        <li><a href="javascript:;">参与贡献</a></li>
                        <li><a href="javascript:;">支持Azone-UI</a></li>
                        <li><a href="javascript:;">更新日志</a></li>
                      </ul>
                        <a href="javascript:;" class="zujian">组件</a>
                        <div>
                            <div class="basics">基础组件</div>
                        </div>
                        <ul>
                            <li><a href="javascript:;">Button<span>按钮</span></a></li>
                            <li><a href="javascript:;">input框</a></li>
                            <li><a href="javascript:;">表单</a></li>
                            <li><a href="javascript:;">导航</a></li>
                            <li><a href="javascript:;">面包屑</a></li>
                            <li><a href="javascript:;">选项卡</a></li>
                            <li><a href="javascript:;">进度条</a></li>
                            <li><a href="javascript:;">验证码</a></li>
                            <li><a href="javascript:;">星星评分</a></li>
                            <li><a href="javascript:;">登陆验证</a></li>
                            <li><a href="javascript:;">静态表格</a></li>
                            <li><a href="javascript:;">动画</a></li>
                        </ul>
                    </div>
                    <div>
                        <div>
                            <div class="basics">组件示例</div>
                        </div>
                        <ul>
                            <li><a href="javascript:;">弹出层</a></li>
                            <li><a href="javascript:;">购物车</a></li>
                            <li><a href="javascript:;">提示框</a></li>
                            <li><a href="javascript:;">手风琴</a></li>
                            <li><a href="javascript:;">下拉菜单</a></li>
                            <li><a href="javascript:;">折叠效果</a></li>
                            <li><a href="javascript:;">日期与时间选择</a></li>
                            <li><a href="javascript:;">即时通讯</a></li>
                            <li><a href="javascript:;">轮播图</a></li>
                            <li><a href="javascript:;">分页</a></li>
                            <li><a href="javascript:;">文件上传</a></li>
                            <li><a href="javascript:;">颜色选择器</a></li>
                            <li><a href="javascript:;">滑块</a></li>
                            <li><a href="javascript:;">加载</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="tab_boxs">
              <div class="tab_box" v-highlight-a>
                    <div class="quick">
                      <az-right-azone></az-right-azone>
                    </div>
                    <div class="hide">
                      <az-right-aztwo></az-right-aztwo>
                    </div>
                    <div class="hide">
                      <az-right-azthree></az-right-azthree>
                    </div>
                    <div class="hide">
                      <az-right-azfour></az-right-azfour>
                    </div>
                    <div class="hide">
                      <az-right-azfive></az-right-azfive>
                    </div>
                    <div class="hide">
                      <az-button-show></az-button-show>
                    </div>
                    <div class="hide">
                      <az-inputshow></az-inputshow>
                    </div>
                    <div class="hide">
                      <az-the-form-show></az-the-form-show>
                    </div>
                    <div class="hide">
                      <az-navigation-show></az-navigation-show>
                    </div>
                    <div class="hide">
                      <az-bread-curmbs-show></az-bread-curmbs-show>
                    </div>
                    <div class="hide">
                      <az-tab-show></az-tab-show>
                    </div>
                    <div class="hide">
                      <az-progress-bar-show></az-progress-bar-show>
                    </div>
                    <div class="hide">
                        <az-yzm-input-show></az-yzm-input-show>
                    </div>
                    <div class="hide">
                        <az-rate-show></az-rate-show>
                    </div>
                    <div class="hide">
                      <az-checkuser-show></az-checkuser-show>
                    </div>
                    <div class="hide">
                      <az-table-show></az-table-show>
                    </div>
                    <div class="hide">
                      <az-shuffing-show></az-shuffing-show>
                    </div>
                    <div class="hide">
                      <az-popup-show></az-popup-show>
                    </div>
                    <div class="hide">
                      <az-shop-cart-show></az-shop-cart-show>
                    </div>
                    <div class="hide">
                        <az-prompt-box-show></az-prompt-box-show>
                    </div>
                    <div class="hide">
                     <az-accordion-show></az-accordion-show>
                    </div>
                    <div class="hide">
                      <az-dorp-down-menu-show></az-dorp-down-menu-show>
                    </div>
                    <div class="hide">
                      <az-flod-show></az-flod-show>
                    </div>
                    <div class="hide">
                      <az-date-show></az-date-show>
                    </div>
                    <div class="hide">
                      <az-comm-show></az-comm-show>
                    </div>
                    <div class="hide">
                      <az-slider-some-show></az-slider-some-show>
                    </div>
                    <div class="hide">
                      <az-paging-show></az-paging-show>
                    </div>
                    <div class="hide">
                      <az-uploader-show></az-uploader-show>
                    </div>
                    <div class="hide">
                      <az-color-picker-show></az-color-picker-show>
                    </div>
                    <div class="hide">
                      <az-row>
                          <az-yzm-hua-show></az-yzm-hua-show>
                      </az-row>
                    </div>
                    <div class="hide">
                      <az-animation-show></az-animation-show>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
import $ from '../../../static/js/jquery';
import AzButtonShow from "../AzGroupLibrary/AzButtonShow";
import AzShopCartShow from "../AzGroupLibrary/AzShopCartShow";
import AzInputshow from "../AzGroupLibrary/AzInputshow";
import AzDorpDownMenuShow from "../AzGroupLibrary/AzDorpDownMenuShow";
import AzFlodShow from "../AzGroupLibrary/AzFlodShow";
import AzDateShow from "../AzGroupLibrary/AzDateShow";
import AzYzmHuaShow from "../AzGroupLibrary/AzYzmHuaShow";
import AzYzmInputShow from "../AzGroupLibrary/AzYzmInputShow";
import AzAccordionShow from "../AzGroupLibrary/AzAccordionShow";
import AzRateShow from "../AzGroupLibrary/AzRateShow";
import AzCommShow from "../AzGroupLibrary/AzCommShow";
import AzUploaderShow from "../AzGroupLibrary/AzUploaderShow";
import AzColorPickerShow from "../AzGroupLibrary/AzColorPickerShow";
import AzAnimationShow from "../AzGroupLibrary/AzAnimationShow";
import AzTableShow from "../AzGroupLibrary/AzTableShow";
import AzTabShow from "../AzGroupLibrary/AzTabShow";
import AzProgressBarShow from "../AzGroupLibrary/AzProgressBarShow";
import AzPopupShow from "../AzGroupLibrary/AzPopupShow";
import AzShuffingShow from "../AzGroupLibrary/AzShuffingShow";
import AzCheckuserShow from "../AzGroupLibrary/AzCheckuserShow";
import AzRightAzone from "../assembly/AzRightAzone";
import AzRightAztwo from "../assembly/AzRightAztwo";
import AzRightAzthree from "../assembly/AzRightAzthree";
import AzRightAzfour from "../assembly/AzRightAzfour";
import AzRightAzfive from "../assembly/AzRightAzfive";
import AzSliderSomeShow from "../AzGroupLibrary/AzSliderSomeShow";
import AzPagingShow from "../AzGroupLibrary/AzPagingShow";
import AzTheFormShow from "../AzGroupLibrary/AzTheFormShow";
import AzPromptBoxShow from "../AzGroupLibrary/AzPromptBoxShow";
import AzNavigationShow from "../AzGroupLibrary/AzNavigationShow";
import AzBreadCurmbsShow from "../AzGroupLibrary/AzBreadCurmbsShow";


export default {
    name:"AzComponentsNav",
  components: {
    AzBreadCurmbsShow,
    AzNavigationShow,
    AzPromptBoxShow,
    AzTheFormShow,
    AzPagingShow,
    AzSliderSomeShow,
    AzRightAzfive,
    AzRightAzfour,
    AzRightAzthree,
    AzRightAztwo,
    AzRightAzone,
    AzCheckuserShow,
    AzShuffingShow,
    AzPopupShow,
    AzProgressBarShow,
    AzTabShow,
    AzTableShow,
    AzAnimationShow,
    AzColorPickerShow,
    AzUploaderShow,
    AzCommShow,
    AzRateShow,
    AzAccordionShow,
    AzYzmInputShow,
    AzYzmHuaShow,
    AzDateShow,
    AzFlodShow,
    AzDorpDownMenuShow,
    AzInputshow,
    AzShopCartShow,
    AzButtonShow},
  mounted:function(){
         var $div_li = $("div.tab_menu ul li");
    $div_li.click(function () {             //定义了tan_menu对应的单击事件，也就是类别的单击事件。
        $(this).addClass("selected")
        .siblings().removeClass("selected");
        var index = $div_li.index(this);
        $("div.tab_box>div").eq(index).show()
        .siblings().hide();
    }).hover(function () {                 //定义了鼠标滑过特效
        $(this).addClass("hover");
    }, function () {
        $(this).removeClass("hover");
    });
      $(".show").each(function (i) {
        $(this).find("a").click(()=> {
          $(this).next().slideToggle(1000)
        })
      })
    }
}
</script>
<style>
/* nav */
nav{
    width: 100%;
    height: 577px;
    background:#fff;
}
.tab{
    width: 100%;
    height: 400px;
}
.tabs{
    width: 220px;
    overflow: hidden;
    float: left;
}
.tab_menu{
    width: 240px;
    height: 570px;
    overflow-y: auto;
}
.zujian{
    margin: 0;
    display: block;
    color: #455a64;
    font-size: 16px;
    padding: 10px 20px 10px 40px;
    line-height: 24px;
    font-weight: 700;
}
.basics {
    font-size: 12px;
    line-height: 40px;
    padding-left: 40px;
    color: rgba(69,90,100,.6);
}
.tab_menu ul{
    display: block;
    width: 100%;
}
.tab_menu ul li {
    display: block;
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding-left: 37px;
}
.tab_menu ul li a{
    display: block;
    height: 50px;
    font-size: 18px;
    color:#455a64;
}
.tab_menu ul li a span{
    font-size: 16px;
    opacity: .6;
}
.tab_menu ul .selected a{
    color: #0079f3;
}
.tab_menu ul li a:hover{
    color: #0079f3;
}
.tab_boxs{
    float: left;
    width: 1129px;
    height: 560px;
    overflow: hidden;
}
.tab_box{
    float: left;
    width: 1129px;
    height: 560px;
    overflow-y: auto;
    border-left: 1px solid #f1f4f8;
    word-wrap:break-word; word-break:normal;
}
.quick{
    width: 100%;
    padding-top: 10px;
    padding-left: 20px;
    padding-right: 15px;
  overflow: hidden;
}
.hide{
    width: 100%;
    padding-top: 10px;
    padding-left: 20px;
    padding-right: 15px;
    display: none;
  }
</style>
