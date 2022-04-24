<script lang="ts">
import Vue from 'vue';
import Header from './Header.vue';
import Services from './Services.vue';
// import Advantages from './Advantages.vue';
import Contact from './Contact.vue';
import Footer from './Footer.vue';

export default Vue.extend({
  components: { 
      Header,
      Services,
      // Advantages,
      Contact,
      Footer,
    },
  name: 'Layout',
});
</script>

<template>
  <main class="layout">
    <Header />
    <Services />
    <!-- <Advantages /> -->
    <Contact />
    <Footer />
  </main>
</template>

<style lang="scss" scoped>
    .layout {
        height: 100vh;
        width: 100%;
    }
</style>