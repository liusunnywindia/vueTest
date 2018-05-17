<template>
    <div class="home">
      <v-header></v-header>
      <v-carsol></v-carsol>
      <div id="lei1" style=" background:none;">
        <div id="lei1-box">
          <a href="#"><div class="lei-box">
            <div class="cp-img"><img src="//gw.alicdn.com/bao/uploaded/i3/704298669/TB214wTcB8kpuFjSspeXXc7IpXa_!!704298669.jpg_180x180xz.jpg_.webp"></div>
            <span>产品一</span>
            <div class="shop1"><p>价格：600¥</p><div></div></div>
          </div></a>
          <a href="#"><div class="lei-box">
            <div class="cp-img"><img src="//gw.alicdn.com/bao/uploaded/i3/704298669/TB214wTcB8kpuFjSspeXXc7IpXa_!!704298669.jpg_180x180xz.jpg_.webp"></div>
            <span>产品一</span>
            <div class="shop1"><p>价格：600¥</p><div></div></div>
          </div></a>
          <a href="#"><div class="lei-box">
            <div class="cp-img"><img src="//gw.alicdn.com/bao/uploaded/i3/704298669/TB214wTcB8kpuFjSspeXXc7IpXa_!!704298669.jpg_180x180xz.jpg_.webp"></div>
            <span>产品一</span>
            <div class="shop1"><p>价格：600¥</p><div></div></div>
          </div></a>
          <a href="#"><div class="lei-box">
            <div class="cp-img"><img src="//gw.alicdn.com/bao/uploaded/i3/704298669/TB214wTcB8kpuFjSspeXXc7IpXa_!!704298669.jpg_180x180xz.jpg_.webp"></div>
            <span>产品一</span>
            <div class="shop1"><p>价格：600¥</p><div></div></div>
          </div></a>
          <a href="#"><div class="lei-box">
            <div class="cp-img"><img src="//gw.alicdn.com/bao/uploaded/i3/704298669/TB214wTcB8kpuFjSspeXXc7IpXa_!!704298669.jpg_180x180xz.jpg_.webp"></div>
            <span>产品一</span>
            <div class="shop1"><p>价格：600¥</p><div></div></div>
          </div></a>
          <a href="#"><div class="lei-box">
            <div class="cp-img"><img src="//gw.alicdn.com/bao/uploaded/i3/704298669/TB214wTcB8kpuFjSspeXXc7IpXa_!!704298669.jpg_180x180xz.jpg_.webp"></div>
            <span>产品一</span>
            <div class="shop1"><p>价格：600¥</p><div></div></div>
          </div></a>

        </div>
      </div>
    </div>
</template>
<script type="es6">
  import header from '@/components/head'
  import carsol from '@/components/carsol'
    export default {
        data() {
            return {}
        },
      components:{
        'v-header':header,
        'v-carsol':carsol
      }
    }
</script>
<style>
  .home{

    height:100%;
    width:100%;
    /*background-color: orange;*/
  }
.carsol{
  margin-top: 40px;
}
  #lei1-box {
    overflow: auto;
    padding-top: 10px;
  }
  a {
    outline-style: none;
    color: rgba(68, 108, 138, 1);
    text-decoration: none;
  }
  .lei-box {
    width: 43%;
    height: 170px;
    background: #fff;
    margin: 2.5%;
    padding: 1%;
    float: left;
  }
  .cp-img {
    width: 100%;
    height: 120px;
    overflow: hidden;
  }
  .lei-box span {
    text-align: left !important;
    font-size: 14px;
    line-height: 25px;
    color: #446c8a;
  }
  .shop1 {
    overflow: hidden;
  }
  .shop1 p {
    float: left;
    color: #F31114;
    margin-top: 5px;
  }
  .shop1 div {
    width: 20px;
    height: 20px;
    background: url(../assets/images/tubiao.png);
    background-size: 300px;
    background-position: 0px 0px;
    float: right;
  }
</style>
