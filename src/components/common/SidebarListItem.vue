<template>
  <div class="list-item rounded-border" :style="cssProps">
    <div class="icon rounded-border">
      <slot name="icon" />
    </div>
    <span class="list-item__text">
      <slot name="body" />
    </span>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true,
    },
  },
  computed: {
    cssProps() {
      return {
        "--icon-background": this.color,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.list-item {
  padding: 12px;
  display: flex;
  align-items: center;
  background: #fff;

  gap: 12px;
  &__text {
    font-weight: 600;
    font-size: 14px;
    line-height: 143%;
  }
  & .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
    background: var(--icon-background);
  }
}
</style>