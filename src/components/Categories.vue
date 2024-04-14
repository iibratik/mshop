<template>
  <div class="category">
    <div class="category__content container">
      <h2 class="category-title title">Категории</h2>
      <div class="categories-body">
        <div v-for="item in categories" :key="item.id" class="category-card">
          <img
            :src="require(`@/assets/svg/${item.img}.svg`)"
            :alt="item.title"
          />
          <h3 class="card-title">{{ item.title }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          img: "headphones",
          title: "Музыка",
        },
        {
          img: "tickets",
          title: "Кино",
        },
        {
          img: "screen",
          title: "Работа",
        },
        {
          img: "hello",
          title: "Нейросети",
        },
        {
          img: "view",
          title: "Игры",
        },
        {
          img: "figures",
          title: "Лайфстайл",
        },
        {
          img: "cards",
          title: "Развлечения",
        },
        {
          img: "advertising",
          title: "Соц.сети",
        },
        {
          img: "AppStore",
          title: "App Store",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>