<template>
  <NavigationSidebar
    @disable-nav-sidebar="setNavSidebarStatus"
    v-if="navSidebarStatus"
  />
  <Navigation @active-nav-sidebar="setNavSidebarStatus" v-else />
</template>

<script>
import NavigationSidebar from "@/components/Navigation/Header.vue";
import Navigation from "@/components/Navigation/navigation.vue";
export default {
  components: {
    NavigationSidebar,
    Navigation,
  },
  data() {
    return {
      navSidebarStatus: true,
    };
  },
  methods: {
    setNavSidebarStatus(status) {
      this.navSidebarStatus = status;
      this.$emit("sendSidebarStatus", status);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>