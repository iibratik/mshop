<template>
  <v-app id="app">
    <Navigation />
    <router-view />
  </v-app>
</template>

<script>
import Navigation from "./components/Navigation/navigation.vue";
export default {
  components: {
    Navigation,
  },
};
</script>
