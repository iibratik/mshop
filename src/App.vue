<template>
  <VApp id="app">
    <Navigation />
    <router-view />
    <Footer />
  </VApp>
</template>

<script>
import Navigation from "./components/Navigation/navigation.vue";
export default {
  components: {
    Navigation,
  },
};
</script>
