<template>
  <v-app id="app">
    
    <Header @sendSidebarStatus="setSidebarStatus" />
    <router-view v-if="!sidebarStatus" />
    <Footer />
  </v-app>
</template>

<script>
import Header from "./components/Navigation/Header.vue";
export default {
  data() {
    return {
      sidebarStatus: false,
    };
  },
  components: {
    Header,
  },
  methods: {
    setSidebarStatus(status) {
      this.sidebarStatus = status;
    },
  },
};
</script>
