<template>
  <div id="app">
    <div class="content"><router-view/></div>
    <v-tabbar></v-tabbar>
  </div>
</template>

<script type="es6">
  import  tabbar from '@/components/tabbar'
export default {
  name: 'App',
  components:{
    'v-tabbar':tabbar
  },
  data(){
    return{

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
  .content{
    top:0px;
    left: 0px;
    position:fixed;
    right: 0px;
    background-color: #f5f5f5;

  }
</style>
