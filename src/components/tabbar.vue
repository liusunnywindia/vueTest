<template>
    <div class="tabar">
      <div class="tab">
        <div class="tabitem">
            <router-link to="/">
              <div class="tab-text">首页</div>
            </router-link>
        </div>
        <div class="tabitem">
          <router-link to="/shopping">
            <div class="tab-text">购物车</div>
          </router-link>
        </div>
        <div class="tabitem">
          <router-link to="/user">
            <div class="tab-text">我的</div>
          </router-link>
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
  .tab{
    position: fixed;
    bottom: 0;
    left: 0;
    width:100%;
    height:2rem;
    box-shadow: 0px 0px 3px rgba(0,0,0,0.2);
    display: flex;
    justify-content: center;
    justify-content: center;
    line-height: 2rem;


  }
  .tabitem{
    float: left;
    flex: 1;
    height:100%;
    background-color: #fff

  }
  .tabitem :hover{
    background-color: #eeeeee;
  }

.tabitem a{
  text-decoration: none;
}
  .tab-text{
    font-size: 10px;
    color: #000;
    line-height: 2rem;
  }
  </style>
