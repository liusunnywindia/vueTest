<template>
    <div>
      <div class="gou" v-for="x in goods_list">
        <div class="dleft">
          <input type="checkbox" name="pp"  v-model="x.checked" />
           <img src="../assets/images/user/ding1.png" class="shang">
        </div>
        <div class="dright">
          <div class="box">
            <div class="intro">
              <div class="introname">{{x.name}}</div>
              <div class="type"><span class="introtype">M:白色</span></div>
            </div>
            <div>
              <div class="price">
                <span>{{x.price*x.num |formatMoney}}</span>
              </div>
                <div class="right">
                <input type="button" value="-" class="add" v-on:click="jian(x)">
                <input type="text"  class="num num2" disabled  v-model="x.num">
                <input type="button" value="+" class="sub" v-on:click="jia(x)">
                </div>
            </div>
          </div>
        </div>
      </div>
      <div class="jie">
        <div class="ji1">
          <label>
            <input type="checkbox" name="all" v-model="checkedAll"/>
            <span>全选</span>
          </label>
        </div>
        <div class="ji2">
          <div class="sum">
            <div>合计: <em>￥{{total}}</em></div>
          </div>
          <div class="suan">
            结算
          </div>
        </div>
      </div>

    </div>
</template>
<script type="es6">
  export default {
    data() {
      return {
        goods_list: [{name : "测试商品1",num : 1, price : 10.0, checked: false},
          {name : "测试商品2",num : 1, price : 20.0, checked: false},
          {name : "测试商品3",num : 1, price : 30.0, checked: false},
          {name: "测试商品4", num: 1, price: 40.0, checked: false }
        ],
        totalMoney:0
      };
    },
    computed:{
      checkedAll: {
        get: function() {
          return this.checkedCount == this.goods_list.length;
        },
        set: function(value) {

          this.goods_list = this.goods_list.map(function(item){item.checked=value;return item;});

        },

      },
      checkedCount: {
        get: function() {
          return this.goods_list.filter(function(item){return item.checked}).length;
        }
      },
      total:function(){
        var sum = 0;
        var selected = this.goods_list.filter(function(item){return item.checked});
        for(let i=0;i<selected.length;i++){
          sum += +(selected[i].price*selected[i].num);
        }
        return sum;
      }
    },
    filters:{
      formatMoney:function (value) {
        return "￥"+value.toFixed(2);
      }
    },
    methods: {
      jia:function(x){
        if(x.num>=x.max){
          x.num=x.max
        }else{
          x.num+=1;
        }
      },
//减
      jian:function(x){
        if(x.num==1){
          x.num==1
        }else{
          x.num-=1;
        }
      }
    }
  };
</script>
<style>
  .gou{
    width:100%;
    height: 80px;
    background-color: #fff;
    margin-bottom: 10px;

  }
   .dleft{
     float: left;
     position: relative;
     height: 100%;
     width:30%;
     display: -webkit-flex;
     display: flex;
     -webkit-align-items: center;
     align-items: center;
     -webkit-justify-content: center;
     justify-content: center;
   }
  .dright{
    position: relative;
    width: 60%;
    height: 100%;
    float: right;


  }
  .shang{
    width: 60px;
    height: 60px;
    margin: 10px;

  }
  .el-input-number{
    top:20px;
  }
  .content{
    height: 583px;
    overflow: auto;

  }
  .right{

    /*display: -webkit-flex;*/
    /*display: flex;*/
    /*-webkit-align-items: center;*/
    /*align-items: center;*/
    /*-webkit-justify-content: center;*/
    /*justify-content: center;*/

  }
  .right input{
    width: 20px;
    height: 20px;

  }
  .num
  {
    height: 20px;
    text-align: center;
  }
  .price{
    float: left;
  }
  .price span{
    color: orangered;
    font-weight: bold;
    font-size: 16px;
  }
  .introname{
    font-weight: bold;
    font-size: 16px;
    text-align: left;
  }
  .introtype{
    background-color: #b1b1b1;
    border-radius: 2px;
    color: white;
    text-align: left;
  }
  .box{
    padding: 15px;
  }
  .type{
    text-align: left;
  }
  .jie{
    position: fixed;
    bottom: 60px;
    height: 42px;
    border-top: 1px solid #eeeeee;
    background-color: white;
    width: 100%;
  }
  .ji1{
    float: left;
    height: 100%;
    margin:0px 2px;
    line-height: 42px;
  }
  .ji2{
    float: right;
    height: 100%;
    width: 70%;
    line-height: 42px;
  }
  .sum{
    float: left;
    height: 100%;
    width: 37%;
    line-height: 42px;
    margin-right: 3px;
  }
  .suan{
    background-color: orangered;
    float: right;
    height: 100%;
    width: 60%;
    line-height: 42px;
    color: white;
  }
</style>
