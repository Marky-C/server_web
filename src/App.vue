<template>
  <div id="app">
    <Loading v-if="showLoading" />
    <div class="version">{{ version }}</div>
  </div>
</template>

<script>

import Loading from './interfaces/Loading/Loading.vue'

import { mapState } from 'vuex'

export default {
  name: 'App',
  computed:{
    ...mapState('loading', [
      'showLoading'
    ]),
    ...mapState([
      'version'
    ])
  },
  methods:{
    
  },
  components: {
    Loading
  },
  mounted(){
    
  }
}
</script>

<style>

body {
  background-color: rgba(0, 0, 0, 0);
  margin: 0;
  padding: 0;
  height: -webkit-fill-available;
  width: -webkit-fill-available;
  position: absolute;
  font-family: Bebas Neue Pro;
  color: #fff;
  user-select: none;
}

</style>

<style lang="scss" scoped>

#app {
  height: -webkit-fill-available;
  width: -webkit-fill-available;
  background-color: rgba(0, 0, 0, 0);
}

.version {
  position: absolute;
  bottom: 1rem;
  right: 1rem;

  font-weight: 300;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.2);
}

</style>
