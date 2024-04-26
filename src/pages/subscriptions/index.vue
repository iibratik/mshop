<script setup>

</script>


<template>
    <div class="container">
        <AppBreadcrumbs :items="[{ title:'Активные подписки'}]" description="Здесь находятся все активные подписки, которые вы оформили через Shopy."/>
        <div>
            <NoData type="subs" />
            <BlueBtn block height="48">Написать в поддержку</BlueBtn>
        </div>
    </div>
</template>