<script setup>
import { ref } from "vue"
import NoAccountsBanner from "@/views/accounts/components/NoAccountsBanner.vue";
import AddAccountDialog from "@/views/accounts/components/AddAccountDialog.vue";

const isDialogVisible = ref(false)

</script>

<template>
    <div class="container">
        <AppBreadcrumbs :items="[{ title:'Сохранённые данные'}]" description="Сохраняйте данные от ваших аккаунтов здесь, чтобы не заполнять их каждый раз при продлении. Все данные надёжно защищены."/>
        <div>
            <NoAccountsBanner />
            <BlueBtn block height="48" @click="isDialogVisible = true">Добавить аккаунт</BlueBtn>
        </div>
        <AddAccountDialog v-model:is-dialog-visible="isDialogVisible" />
    </div>
</template>


<style lang="scss" scoped>

</style>
