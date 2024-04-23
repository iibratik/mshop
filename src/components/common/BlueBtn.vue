<template>
  <VBtn
    class="custom-blue-btn"
    variant="elevated"
    style="border-radius: 8px; text-transform: capitalize"
    color="#0070CC"
  >
    <template
      v-for="(slot, index) of Object.keys($slots)"
      :key="index"
      #[slot]="props"
    >
      <slot :name="slot" v-bind="props ?? {}" />
    </template>
  </VBtn>
</template>

<style lang="scss" >
.custom-blue-btn {
  & .v-btn__content {
    color: rgb(255, 255, 255);
    font-family: Graphik;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0%;
    z-index: 1;
    text-transform: none;
  }
  & .v-btn__underlay {
    border: 1px solid rgb(0, 112, 204);
    border-radius: 8px;
    /* Shadows/shadow-xs */
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    background: rgb(0, 112, 204);
    opacity: 1;
  }
}
</style>
