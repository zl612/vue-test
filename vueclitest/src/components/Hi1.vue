<template>
  <div class="hello">
    <h1>{{ msg }} -- {{ $route.params.username }}</h1>

  </div>
</template>

<script>
export default {
  name: "hi1",
  data() {
    return {
      msg: "Hi1, I am JSPang"
    };
  }
};
</script>


<style scoped>
</style>