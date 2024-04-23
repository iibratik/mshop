<template>
  <swiper
    :spaceBetween="12"
    :loop="true"
    :centeredSlides="true"
    :slidesPerView="1.5"
    class="mySwiper main-slider__content"
  >
    <swiper-slide class="main-slider__slide"></swiper-slide>
    <swiper-slide class="main-slider__slide"></swiper-slide>
    <swiper-slide class="main-slider__slide"></swiper-slide>
    <swiper-slide class="main-slider__slide"></swiper-slide>
    <swiper-slide class="main-slider__slide"></swiper-slide>
    <swiper-slide class="main-slider__slide"></swiper-slide>
    <swiper-slide class="main-slider__slide"></swiper-slide>
    <swiper-slide class="main-slider__slide"></swiper-slide>
    <swiper-slide class="main-slider__slide"></swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

// import required modules

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>
