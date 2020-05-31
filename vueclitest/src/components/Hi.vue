<template>
  <div class="hi">
    <h1>{{ msg }}</h1>
     <van-button type="primary">主要按钮</van-button>
      <router-view/>
  </div>
</template>

<script>
export default {
  name: "hi",
  data() {
    return {
      msg: "Hi, I am JSPang"
    };
  }
};
</script>


<style scoped>
</style>