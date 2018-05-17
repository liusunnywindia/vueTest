<template>
  <div class="user">
    <div class="uu">
      <div class="us">
         <div class="tou">
            <img class="tt" src="../assets/user1.png">
         </div>
        <div class="js">
           <div class="username"><span>sunnywindia</span></div>
          <div class="bq"><span class="hy"><i class="el-icon-edit"></i>铂金会员</span></div>
        </div>
      </div>
    </div>
     <div class="gg">
       <ul>
         <li>发布</li>
         <li>收藏</li>
         <li style="border-right: 0px;">足迹</li>
       </ul>
     </div>
    <div class="box-card">
      <div class="card-head"><span style="float: left;margin-left: 10px;">我的订单</span> <span class="ding">查看更多订单></span></div>
      <div class="card-body">
        <ul class="ding-btn">
          <li><div><img src="../assets/images/user/dai.png" ></div><div>待付款</div></li>
          <li><div><img src="../assets/images/user/fa.png"></div><div>待发货</div></li>
          <li><div><img src="../assets/images/user/shou.png"></div><div>待收货</div></li>
          <li><div><img src="../assets/images/user/ping.png"></div><div>待评价</div></li>
          <li><div><img src="../assets/images/user/tui.png"></div><div>退款/售后</div></li>
        </ul>
         <div class="my-ding">
           <div class="myding"><span style="float: left">最新物流</span><span style="float: right">13:09</span></div>
           <div class="newding">
             <div class="dingimg"><img src="../assets/images/user/ding1.png" style="width: 2.7rem; height: 2.7rem;"></div>
             <div class="dingxq"><div class="status"><i class="el-icon-success">已签收</i></div><span class="xqloca">[宁波市]快递已经在宁波邱隘被签收</span></div>
           </div>
         </div>
      </div>
    </div>
    <div class="box-card">
      <div class="card-head"><span style="float: left;margin-left: 10px;">必备工具</span> <span class="ding">查看全部工具</span></div>
      <div class="card-body">
        <div class="slider-item" >
          <a href="#" class="grids-item">
            <div class="grids-icon">
               <img src="../assets/images/index_logo_01.jpg">
            </div>
            <div class="grids-txt"><span>美食</span></div>
          </a>
          <a href="#" class="grids-item">
            <div class="grids-icon">
              <img src="../assets/images/index_logo_02.jpg">
            </div>
            <div class="grids-txt"><span>电影</span></div>
          </a>
          <a href="#" class="grids-item">
            <div class="grids-icon">
              <img src="../assets/images/index_logo_03.jpg">
            </div>
            <div class="grids-txt"><span>住宿</span></div>
          </a>
          <a href="#" class="grids-item">
            <div class="grids-icon">
              <img src="../assets/images/index_logo_04.jpg">
            </div>
            <div class="grids-txt"><span>休闲娱乐</span></div>
          </a>
          <a href="#" class="grids-item">
            <div class="grids-icon">
              <img src="../assets/images/index_logo_05.jpg">
            </div>
            <div class="grids-txt"><span>外卖</span></div>
          </a>
          <a href="#" class="grids-item">
            <div class="grids-icon">
              <img src="../assets/images/index_logo_06.jpg">
            </div>
            <div class="grids-txt"><span>自助餐</span></div>
          </a>
        </div>
      </div>
    </div>
    <div class="box-card">
      <div class="card-body">

        <span style="    height:14rem;">--我所有底线的--</span>

      </div>
    </div>
  </div>
</template>
<script type="es6">
    export default {
        data() {
            return {}
        }
    }
</script>
<style>
  .uu{
    background-color: orangered;
    width:100%;
    height: 4rem;
    padding: 2rem;
  }
 .tou{
   float: left;
   width: 30%;
   height: 100%;
   display: flex;
   -webkit-align-items: center;
   align-items: center;
   -webkit-justify-content: center;
   justify-content: center;
 }
  .tt{
    width: 60px;
    height: 60px;
    border-radius: 50%;


  }
  .user{
    overflow: auto;
  }
  .username span{

    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
  }
  .js{
    width: 40%;
    height: 100%;
    float: left;
  }
  .username{
    position: absolute;
    top:5%;
  }
  .bq{
    position: absolute;
    top:10%;
  }
.hy{
  color: white;
  padding: 4px;
  border-radius: 10px;
  background-color: rgba(128, 128, 128, 0.32);
}
  .gg{
    background-color: #fff;
    margin-bottom: 1rem;
  }
  .gg ul{
    display: flex;
    padding: 10px  0;

  }
  .gg ul li{
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    text-align: center;
    height: 2rem;
    line-height: 2rem;
    border-right: 2px solid orangered;
    font-size: 1rem;
  }
  .dj-left :after{
    border: 2px solid #c8c8cd;
    border-bottom-width: 0;
    border-left-width: 0;
    content: " ";
    top: 50%;
    right: 20px;
    position: absolute;
    width: 5px;
    height: 5px;
    -webkit-transform: translateY(-50%) rotate(45deg);
    transform: translateY(-50%) rotate(45deg);
  }

.box-card{
background-color: #fff;
  margin: 0px 0.7rem;
  border-radius: 5px;

}
.ding{
  font-size: 12px;
  color: grey;
  float: right;
  margin-right: 10px;
}
.card-head{
  height: 2rem;
  line-height: 2rem;
  border-bottom: 1px solid #eee;
}
.card-body ul{
  display: flex;
}
.card-body ul li{
  line-style:none;
  padding: 0.7rem 0.7rem;
  flex: auto;
  font-size: 10px;
}
  .ding-btn img{
    width:30px;
  }
  .my-ding{
    background-color:#e4e4e4 ;
    margin: 0.3rem 0.7rem;

  }
  .myding span{
    color: #909399;
    height:1.7rem;
    margin: 0rem 1rem;
  }
  .myding{
    height: 2rem;
    line-height: 2rem;
  }
  .dingimg{
    float: left;
    display: block;
    top: 50%;
    margin: 0rem 1rem;

  }
  .newding{
    height: 4rem;
    width: 100%;
  }
  .xqloca{
    font-size: 10px;
  }
  .dingxq{
    display: block;
    float: left;

  }

.us{
  width: 100%;
  height: 100%;
}
  .status{
    text-align: left;
  }
  .m-grids-5 {
    position: relative;
  }
  .m-grids-5 .grids-item {
    width: 20%;
  }
  .menu-swiper .grids-icon {
    padding-bottom: .14rem;
  }
  .slider-item{
    height: 10rem;

  }
  .grids-item {
    float: left;
    margin: 1rem 0.7rem;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }
  .grids-icon {
    padding-bottom: .14rem;
  }
  .grids-icon img {
    width: 2.73rem;
    height: auto;
  }
</style>
