<template>
  <div>
    <MainSlider />
    <Searchinput />
    <Categories/>
    <ProductCards/>
  </div>
</template>

<script>
import ProductCards from '../components/ProductCards'
import Categories from '../components/Categories'
import Searchinput from "../components/Searchinput";
import MainSlider from "@/components/MainSlider.vue";

export default {
  components: {
    ProductCards,
    Categories,
    Searchinput,
    MainSlider,
  },
};
</script>

<style lang="scss" scoped></style>
