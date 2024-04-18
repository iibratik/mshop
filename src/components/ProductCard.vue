<template>
  <div class="product-card">
    <div class="product-card__top">
      <div class="icon">
      <transition name="fade">
          <i
            class="fa-sharp fa-solid fa-heart heart"
            v-if="favouriteStatus"
            style="color: red"
            @click="favouriteStatus = !favouriteStatus"
          ></i>
        <i
          class="fa-sharp fa-regular fa-heart heart"
          style="color: black"
          @click="favouriteStatus = !favouriteStatus"
          v-else
        ></i>
      </transition>
      </div>
      <img src="@/assets/svg/Spotify.svg" alt="Spotify Premium Image" />
    </div>
    <div class="product-card__bottom">
      <h3 class="product-card__title">Spotify Premium</h3>
      <span class="price">от 399₽</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      favouriteStatus: false,
    };
  },
};
</script>