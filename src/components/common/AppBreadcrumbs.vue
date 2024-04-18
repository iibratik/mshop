<script setup>

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  click: {
    type: Function,
    required: false
  },
  divider: {
    type: Boolean,
    default: true,
  },
  description: {
    type: String,
    required: false
  }
})

</script>

<template>
    <div>
        <VBreadcrumbs
          :items="items"
          class="app-breadcrumbs pa-0 mb-2"
        >
            <template #title="{ item }">
                <VIcon v-if="item.icon">
                    {{ item.icon }}
                </VIcon>

                <span v-if="props.click" class="breadcrumb-title" @click.stop="() => props.click(item)">{{ item.title }}</span>
                <span v-else class="breadcrumb-title">{{ item.title }}</span>
            </template>

            <template #divider>
              <VIcon
                  icon="tabler-chevron-right"
                  size="small"
              />
            </template>
        </VBreadcrumbs>
        <div class="breadcrumb__under-text" v-if="!!props.description">{{ props.description }}</div>
        <VDivider v-if="props.divider" style="background: rgb(208, 213, 221);" class="mt-2 mb-8"/>
    </div>
</template>


<style lang="scss">
.app-breadcrumbs {
    &  .v-breadcrumbs-item {
        opacity: 1;
        padding: 0px;
    }
    & .breadcrumb-title {
        color: rgb(16, 24, 40);
        font-family: Graphik;
        font-size: 18px;
        font-weight: 600;
        line-height: 28px;
        letter-spacing: 0%;
        &:hover {
          text-decoration: underline;
        }
    }
}

.breadcrumb__under-text {
  color: rgb(71, 84, 103);
  font-family: Graphik;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0%;
}

</style>
