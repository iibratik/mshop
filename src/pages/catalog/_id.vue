<script setup>
import { ref } from "vue";


const planTabs = ref([
    {
        title: 'Индивидуальный',
        value: 'ind',
    },
    {
        title: 'Для двоих',
        value: 'for_two',
    },
    {
        title: 'Для семьи',
        value: 'for_family',
    },
    {
        title: 'Premium Mini',
        value: 'premium_mini',
    },
])

const duration = ref([
    {
        title: '1 месяц',
        value: 1,
    },
    {
        title: '3 месяца',
        value: 3,
    },
    {
        title: '6 месяцев',
        value: 6,
    },
    {
        title: '12 месяцев',
        value: 12,
    },
    {
        title: '18 месяцев',
        value: 18,
    },
])

</script>

<template>
    <div class="container">
        <div class="d-flex justify-center mb-5">
            <VCard  height="345" style="width:100%">
                <img src="@/assets/svg/Spotify.svg" alt="" class="product__detail-img">
            </VCard>
        </div>
        <div class="mb-5">
            <h3 class="product__name">Spotify Premium</h3>
            <div class="product__price-info d-flex align-center gap-4">
                <div class="product__price d-flex align-center gap-2">
                    <div class="product__price-now">399₽</div>
                    <div class="product__price-old">798₽</div>
                </div>
                <div class="product__price-discount">-50%</div>
            </div>
        </div>
        <div class="mb-5">
            <h3 class="product__tabs-title">План</h3>
            <AppTabs >
                <AppTab v-for="(tab, index) in planTabs" :key="index" :value="tab.value">
                    {{ tab.title }}
                </AppTab>
            </AppTabs>
        </div>
        <div class="mb-7">
            <h3 class="product__tabs-title">Длительность</h3>
            <AppTabs >
                <AppTab v-for="(tab, index) in duration" :key="index" :value="tab.value">
                    {{ tab.title }}
                </AppTab>
            </AppTabs>
        </div>
    </div>
</template>

<style lang="scss">
.product {
    &__detail-img {
        width: 100%;
        height: 100%;
    }
    &__name {
        color: rgb(16, 24, 40);
        font-family: Graphik;
        font-size: 20px;
        font-weight: 500;
        line-height: 30px;
        letter-spacing: 0%;
        text-align: left;
    }
    &__price {
        &-now {
            color: rgb(16, 24, 40);
            font-family: Graphik;
            font-size: 30px;
            font-weight: 500;
            line-height: 38px;
            letter-spacing: 0%;
            text-align: left;
        }

        &-old {
            color: rgb(208, 213, 221);
            font-family: Graphik;
            font-size: 20px;
            font-weight: 500;
            line-height: 20px;
            letter-spacing: 0%;
            text-align: left;
            text-decoration-line: line-through;
        }
        
        &-discount {
            color: rgb(23, 92, 211);
            font-family: Graphik;
            font-size: 14px;
            font-weight: 500;
            line-height: 20px;
            letter-spacing: 0%;
            text-align: center;
            box-sizing: border-box;
            border: 1px solid rgb(178, 221, 255);
            border-radius: 9999px;
            background: rgb(239, 248, 255);
            width: 51px;
            padding: 2px 8px 2px 8px;
            display: flex;
            justify-content: flex-start;
        }
    }

    &__tabs {
        &-title {
            color: rgb(16, 24, 40);
            font-family: Graphik;
            font-size: 14px;
            font-weight: 600;
            line-height: 20px;
            letter-spacing: 0%;
            text-align: left;
        }
    }
}
</style>
