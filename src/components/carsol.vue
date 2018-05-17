<template>
  <div class="carsol">
    <el-carousel height="200px" >
      <el-carousel-item  v-for="item in list">
        <div class="car">
          <img :src="item.url" class="carl">
          <h3 style="position: absolute;right: 0px;top: 0px;color: #ffffff;">{{ item .text}}</h3>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script type="es6">
  export default {
    data() {
      return {
//        itemlist:[{url:require('../assets/images/banner1.png'),text:'狂欢节'},
//          {url:require('../assets/images/hd1.jpg'),text:'文字001'},
//          {url:require('../assets/images/y-banner01.jpg'),text:'文字002'}]
        list:[{url:require("../assets/images/banner1.png")},{url:require('../assets/images/hd1.jpg')},{url:require('../assets/images/y-banner01.jpg'),text:'文字002'}]
      }
    }
  }
</script>
<style>
  .car{
    width:100%;
    height:100%;
    position: relative;
  }
.carl{
  width:100%;
  height:100%;
}
 </style>
