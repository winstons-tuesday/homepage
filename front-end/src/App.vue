<script lang="ts">
import Vue from 'vue';
import Layout from './components/Layout.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Layout
  }
});
</script>

<template>
  <div id="app">
    <layout />
  </div>
</template>

<style lang="scss">
  @import './scss/app';
</style>
