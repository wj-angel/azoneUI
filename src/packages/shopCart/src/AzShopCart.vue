<template>
    <div id="shopcart">
      <table border="1" cellspacing="0" cellpadding="10" style="margin:30px auto;">
        <thead>
        <tr>
          <th><input class="ckbox1 ckbox" type="checkbox" value="全选"/> 全选</th>
          <th>序列</th>
          <th>商品名称</th>
          <th>数量</th>
          <th>单价</th>
          <th>小计</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr  class="tr" :key=index v-for="(p,index) in nav">
          <td><input class="ckbox" type="checkbox" value=""/></td>
          <td>{{p.id}}</td>
          <td>{{p.name}}</td>
          <td>
            <input class="jian" type="button" value=" - "/>
            <span class="num">0</span>
            <input class="jia" type="button" value=" + "/>
          </td>
          <td>单价：
            <span class="mey">{{p.price}}</span>
          </td>
          <td>小计：
            <span class="price">0</span>
          </td>
          <td><input class="del" type="button" value="删 除"/></td>
        </tr>
        </tbody>
      </table>
      <p style="text-align: center;">商品一共
        <span id="bnum">0</span>件；花费
        <span id="total">0</span>元；
      </p>
    </div>
</template>

<script>
    // import shopCart from '../../libs/shopCart.js'
    import  "../../libs/jquery-1.8.3.min"
    export default {
        name: "AzShopCart",
        components:{},
        props:{
          nav:{
            type:Array,
            default:[{id:"001",name:"商品一",price:"1"},
              {id:"002",name:"商品二",price:"1"},
              {id:"003",name:"商品三",price:"1"}]
          }
        },
      mounted(){

      let dels = $("#shopcart .del")
      let trs = $("#shopcart .tr");
      let jians = $("#shopcart .jian");
      let jias = $("#shopcart .jia");
      let nums = $("#shopcart .num");
      let prices = $("#shopcart .price");
      let meys = $("#shopcart .mey");
      let a = 0;
      let b = 0;



    // 删除

      if (dels.length == 1) {
        return;
      }
      for (let i = 0; i < trs.length; i++) {
        dels[i].onclick = function () {
          // console.log(1);
          if (confirm("确定删除吗？")) {
            this.parentNode.parentNode.remove();
            // console.log(dels[i]);     //undefined
          }
        }
    }

    //点击加减：
      let n = 0;
      for (let i = 0; i < trs.length; i++) {
        jians[i].onclick = function () {
          if (parseInt(nums[i].innerHTML) <= 0) {
            return;
          } else {
            n--;
            nums[i].innerHTML = parseInt(nums[i].innerHTML) - 1;
            prices[i].innerHTML = parseFloat(prices[i].innerHTML) - parseFloat(meys[i].innerHTML);
            //商品件数:
            $("#bnum").innerHTML = n;
            // 花费总价：
            let m = parseFloat(meys[i].innerHTML);
            b -= parseFloat(m);
            $("#total").innerHTML = b;
          }
        };

        // console.log(111);
        jias[i].onclick = function () {
          n++;
          nums[i].innerHTML = parseInt(nums[i].innerHTML) + 1;
          prices[i].innerHTML = parseFloat(prices[i].innerHTML) + parseFloat(meys[i].innerHTML);
          //商品件数:
          $("#bnum")[0].innerHTML = n;
          // 花费总价：
          let m = parseFloat(meys[i].innerHTML);
          b += parseFloat(m);
          $("#total")[0].innerHTML = b;
        };
      }

    //全选 反选：

      let ckboxs = $("#shopcart .ckbox");
      $(".ckbox1")[0].onclick = function () {
        for (let i = 0; i < ckboxs.length; i++) {
          if ($(".ckbox1")[0].checked) {
            ckboxs[i].checked = true;
            // ckboxs[i].setAttribute("checked","checked");
          } else if (!$(".ckbox1")[0].checked) {
            ckboxs[i].checked = false;
            // ckboxs[i].setAttribute("checked",false);
          }
        }
        }
      }
    }
</script>

<style scoped>
  @import "../../libs/theme/shopCart.css";
</style>
