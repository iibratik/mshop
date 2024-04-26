<script setup>
/* Всего типов:
 *   accounts, subs
 */
const props = defineProps({
    type: {
        type:String,
        required:true,
    }
})
</script>

<template>
    <div class="accounts__empty-block mt-10 mb-10">
        <img src="@/views/accounts/images/Empty_state.png" alt="" class="accounts__empty-block__img" v-if="type === 'accounts'">
        <img src="@/views/subscriptions/images/NoData.png" alt="" class="accounts__empty-block__img subs" v-if="type === 'subs'">
    </div>
</template>

<style lang="scss" scoped>
.accounts__empty-block {
    width: 100%;
    height: 244px;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    &__img {
        position: absolute;
        top: -180px;
        &.subs {
            top: 0;
        }
    }
}


</style>
