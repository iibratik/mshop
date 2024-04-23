<template>
  <v-btn
    rounded="lg"
    class="secondary-blue-btn rounded-border"
    color="#0157a3"
    variant="outlined"
  >
    <template
      v-for="(slot, index) of Object.keys($slots)"
      :key="index"
      #[slot]="props"
    >
      <slot :name="slot" v-bind="props ?? {}" />
    </template>
  </v-btn>
</template>

<script>
export default {};
</script>

<style lang="scss">
.secondary-blue-btn {
  font-weight: 600;
  font-size: 14px;
  line-height: 143%;
  box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
  border: 1px solid #7cc5fd;
  display: flex;
  .fa-solid.fa-plus {
    font-size: 16px;
  }
  .text {
    margin-left: 10px;
    font-weight: 700;
    font-size: 14px;
    text-transform: capitalize;
    line-height: 143%;
  }
}
</style>