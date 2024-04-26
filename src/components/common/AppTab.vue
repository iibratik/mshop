<script setup>

</script>

<template>
  <VTab v-bind="{...$attrs}" variant="tonal" size="small">
    <slot/>
  </VTab>
</template>

<style lang="scss">
.v-tab { 
    border-radius: 8px !important;
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05) !important;
    border: 1px solid rgb(208, 213, 221) !important;
    background: rgb(255, 255, 255);
}
</style>