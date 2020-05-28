<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div>
      <router-link to="/">首页</router-link> |
      <router-link to="/hi">hi</router-link> |
      <router-link :to="{name: 'hi1', params: { username: 'z-l' }}">-Hi页面1</router-link> |
      <router-link to="/hi/hi2">-Hi页面2</router-link> |
      <router-link to="/goback">-goback</router-link> |
      <router-link to="/count">-count</router-link> |
          <!-- <p>{{ $route.name }}</p> -->
    </div>
    <transition-group name="fade" mode="out-in">
      <router-view  key= '1' />
      <router-view key= '2' name="left" style="background-color: pink;float: left; width:50%;" />                
      <router-view key= '3' name="right"  style="background-color: blue; float: right; width:50%;" />
    </transition-group>
   
  </div>
</template>

<script>
export default {
  name: 'App',
};

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter {
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
