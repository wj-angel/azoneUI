<template>
    <!-- header -->
    <header>
        <div class="headers">
            <div class="header_top">
                <a href="javascript:;" class="logos">
                    <img src="../../../static/images/resindexlogo.png" alt="">
                    <span>Azone</span>
                </a>
               <ul class="header_right">
                   <li class="lis_assembly active"><a href="javascript:;" >Vue 组件</a></li>
                   <li class="lis_assembly">
                       <a href="javascript:;" class="ens">
                           <span>En</span>
                       </a>
                   </li>
               </ul>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    name:"AzComponentsHeader"
}
</script>
<style>
/* header */
header{
    width: 100%;
}
.headers{
    width: 100%;
    background-color: #fff;
}
.header_top{
    padding: 0 40px;
    height: 80px;
    line-height: 80px;
    align-items: center;
    border-bottom: 1px solid #f1f4f8;
}
.logos{
    display: block;
    cursor: pointer;
    float: left;
    height: 80px;
}
.logos img{
    display: inline-block;
    vertical-align: middle;
    width: 65px;
    height: 65px;
    margin-right: 10px;
}
.logos span{
    display: inline-block;
    font-size: 28px;
    color: #333;
    font-family: Dosis,Source Sans Pro,Helvetica Neue,Arial,sans-serif;
    line-height: 80px;
}
.header_right{
    float: right;
}
.header_right li{
    display: inline-block;
    margin: 0 15px;
}
.header_right li a{
    display: block;
    font-size: 18px;
    color: #333;
}
.header_right .active a{
    height: 79px;
    color: #0079f3;
    border-bottom:1px solid #19b5fe;
}
.header_right li .ens span{
    padding: 0 7px;
    font-size: 14px;
    line-height: 24px;
    display: block;
    border-radius: 3px;
    text-align: center;
    color: #455a64;
    border: 1px solid currentColor;
}
.header_right li .ens span:hover{
    color: #0079f3;
    border:1px solid #19b5fe;
}
</style>


