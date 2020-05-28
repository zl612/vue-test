<template>
  <div>
    <h2>{{msg}}</h2>
    <hr />
    <h2>{{ $store.state.count }}</h2>
    <h2>{{ count }}</h2>
    <div>
      <button @click='add(10)'>++</button>
      <button @click="reduce">--</button>
      <button @click="addAction(5)">+++</button>
      <button @click="reduceAction">---</button>
    </div>
  </div>
</template>

<script>
  
  import store from '@/vuex/store';
  import { mapState, mapMutations, mapGetters, mapActions, } from 'vuex';

  export default {
    name: 'count',
    data() {
      return {
        msg: 'hello vuex',
      }
    },
    computed: {
              ...mapState(['count']),
              // ...mapGetters(['count']),
              // count() {
              //   return this.$store.getters.count;
              // }
    },
    methods: {...mapMutations(['add', 'reduce']),
              ...mapActions(['addAction', 'reduceAction'])},
    store
  }
</script> 