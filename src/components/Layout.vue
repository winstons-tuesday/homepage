<script lang="ts">
import Vue from 'vue';
import Header from './Header.vue';
import Services from './Services.vue';
import OurAdvantages from './OurAdvantages.vue';

export default Vue.extend({
  components: { 
      Header,
      Services,
      OurAdvantages,
    },
  name: 'Layout',
});
</script>

<template>
  <main class="layout">
    <Header />
    <Services />
    <OurAdvantages />
  </main>
</template>

<style lang="scss" scoped>
    .layout {
        height: 100vh;
        width: 100%;
    }
</style>