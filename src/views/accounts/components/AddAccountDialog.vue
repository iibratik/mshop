<script setup>
import { computed } from "vue"

const props = defineProps({
    isDialogVisible: {
        type: Boolean,
        required:true,
    }
})

const emit = defineEmits([
  'update:isDialogVisible',
])

const isDialogVisible = computed({
  get() {
    return props.isDialogVisible
  },
  set(value) {
    emit('update:isDialogVisible', value)
  }
})

</script>

<template>
    <div>
        <VDialog
            v-model="isDialogVisible"
            width="400px"
        >
            <VCard height="390px">
                <VCardText class="d-flex justify-space-between align-center" style="flex:0">
                    <VCardTitle class="pa-0">Добавить аккаунт</VCardTitle>
                    <div @click="isDialogVisible = false">X</div>
                </VCardText>
                <VCardText class="py-0">
                    <VForm>
                        <VRow>
                            <VCol cols="12">
                                <VTextField
                                    label="Сервис"
                                    variant="underlined"
                                />
                            </VCol>
                        </VRow>
                    </VForm>
                </VCardText>
            </VCard>
        </VDialog>
    </div>
</template>


<style lang="scss" scoped>

</style>
