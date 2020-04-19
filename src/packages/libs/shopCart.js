
  function z(str) {
    if (str.charAt(0) == "#") {
      return document.getElementById(str.substring(1));
    } else if (str.charAt(0) == ".") {
      return document.getElementsByClassName(str.substring(1));
    } else {
      return document.getElementsByTagName(str);
    }
  }

  let dels = z(".del");
  let trs = z(".tr");
  let jians = z(".jian");
  let jias = z(".jia");
  let nums = z(".num");
  let prices = z(".price");
  let meys = z(".mey");
  let a = 0;
  let b = 0;

// 删除
  function delt() {
    if (dels.length == 1) {
      return;
    }
    for (let i = 0; i < trs.length; i++) {
      dels[i].onclick = function () {
        // console.log(1);
        if (confirm("确定删除吗？")) {
          this.parentNode.parentNode.remove();
          console.log(dels[i]);     //undefined
        }
      }
    }

  }

//点击加减：
  function addminus() {
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
          z("#bnum").innerHTML = n;
          // 花费总价：
          let m = parseFloat(meys[i].innerHTML);
          b -= parseFloat(m);
          z("#total").innerHTML = b;
        }
      };

      // console.log(111);
      jias[i].onclick = function () {
        n++;
        nums[i].innerHTML = parseInt(nums[i].innerHTML) + 1;
        prices[i].innerHTML = parseFloat(prices[i].innerHTML) + parseFloat(meys[i].innerHTML);
        //商品件数:
        z("#bnum").innerHTML = n;
        // 花费总价：
        let m = parseFloat(meys[i].innerHTML);
        b += parseFloat(m);
        z("#total").innerHTML = b;
      };
    }
  }

//全选 反选：
  function xuan() {
    let ckboxs = z(".ckbox");
    z(".ckbox1")[0].onclick = function () {
      for (let i = 0; i < ckboxs.length; i++) {
        if (z(".ckbox1")[0].checked) {
          ckboxs[i].checked = true;
          // ckboxs[i].setAttribute("checked","checked");
        } else if (!z(".ckbox1")[0].checked) {
          ckboxs[i].checked = false;
          // ckboxs[i].setAttribute("checked",false);
        }
      }
    }

  }

  window.onload = function () {
    delt();
    addminus();
    xuan();

  }


