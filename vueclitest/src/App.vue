<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <router-link to="/">首页</router-link> |
      <router-link to="/hi">hi</router-link> |
      <router-link :to="{name: 'hi1', params: { username: 'z-l' }}">-Hi页面1</router-link> |
      <router-link to="/hi/hi2">-Hi页面2</router-link> |
          <!-- <p>{{ $route.name }}</p> -->
    </div>
    <router-view/>
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
</style>
