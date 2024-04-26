<script setup>

</script>

<template>
  <VTabs
    v-bind="{...$attrs}"
    class="mb-tabs v-tabs-pill mt-0 mb-3"
    color="outlined"
  >
    <slot/>
  </VTabs>
</template>

<style lang="scss">
.mb-tabs .v-tab.v-tab--selected {
    color: white;
    background: rgb(0, 112, 204) !important;
    border: 1px solid rgb(0, 112, 204) !important;
}

.v-tabs.v-tabs-pill .v-slide-group-item--active.v-tab--selected {
    box-shadow: 0 2px 6px rgba(var(--v-shadow-key-umbra-color), .14), 0 0 transparent, 0 0 transparent;
}

.mb-tabs .v-slide-group__content {
    gap: .25rem;
}
</style>