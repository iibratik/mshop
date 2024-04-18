<template>
  <div class="navbar-sidebar">
    <div class="sidebar-content container">
      <div class="sidebar-header">
        <nav class="navbar navbar-light mb-6 sidebar-nav">
          <router-link to="/" class="navbar-brand">
            <img src="@/assets/svg/logo.svg" alt="logo image" />
          </router-link>
          <div class="navbar-right">
            <div class="navbar__button rounded-border">
              <i class="fa-regular fa-heart"></i>
            </div>
            <div class="navbar__button rounded-border">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3336 7.49999V4.99999C13.3336 3.15904 11.8413 1.66666 10.0003 1.66666C8.15936 1.66666 6.66697 3.15904 6.66697 4.99999V7.49999M2.99364 8.62663L2.49364 13.96C2.35148 15.4764 2.28039 16.2346 2.53201 16.8202C2.75305 17.3347 3.1404 17.76 3.63199 18.0281C4.19158 18.3333 4.95311 18.3333 6.47618 18.3333H13.5244C15.0475 18.3333 15.809 18.3333 16.3686 18.0281C16.8602 17.76 17.2476 17.3347 17.4686 16.8202C17.7202 16.2346 17.6491 15.4764 17.507 13.96L17.007 8.62663C16.8869 7.34611 16.8269 6.70585 16.5389 6.22179C16.2853 5.79548 15.9106 5.45425 15.4625 5.24153C14.9536 4.99999 14.3106 4.99999 13.0244 4.99999L6.97618 4.99999C5.69005 4.99999 5.04698 4.99999 4.53815 5.24153C4.09003 5.45425 3.71531 5.79548 3.46169 6.22179C3.17371 6.70585 3.11369 7.34611 2.99364 8.62663Z"
                  stroke="#0070CC"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <button
              class="navbar-toggler navbar__button rounded-border"
              type="button"
              aria-label="Toggle navigation"
              @click="sendNavSidebarStatus"
            >
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        </nav>
        <div class="sidebar-username">
          <img src="@/assets/img/emoji.svg" alt="smile emoji" />
          <span> {{ timeStamp }}, {{ username }}!</span>
        </div>
        <div class="sidebar-balance">
          <div class="balance rounded-border">
            <div class="balance-head">
              <span>Баланс</span>
              <SecondaryBlueBtn>
                <i class="fa-solid fa-plus"></i>
                <span class="text">Пополнить</span>
              </SecondaryBlueBtn>
            </div>
            <span class="balance-count"> {{ balance }}₽ </span>
          </div>
          <SidebarListItem style="margin-top: 12px" color="#e62e05">
            <template v-slot:icon>
              <img
                src="@/assets/svg/sale-01.svg"
                alt="promocode activate img"
              />
            </template>
            <template v-slot:body> Активировать промокод </template>
          </SidebarListItem>
        </div>
        <div class="sidebar-personal-cabinet">
          <h2 class="sidebar-title personal-cabinet__title">Личный кабинет</h2>
          <ul class="personal-cabinet__actions">
            <li>
              <SidebarListItem color="#F38744">
                <template v-slot:icon>
                  <img
                    src="@/assets/svg/bookmark.svg"
                    alt="сохраненные аккаунты иконка"
                  />
                </template>
                <template v-slot:body> Сохраненные аккаунты </template>
              </SidebarListItem>
            </li>
            <li>
              <SidebarListItem color="#47CD89">
                <template v-slot:icon>
                  <img
                    src="@/assets/svg/calendar-date.svg"
                    alt="Активные подписки иконка"
                  />
                </template>
                <template v-slot:body> Активные подписки </template>
              </SidebarListItem>
            </li>
            <li>
              <SidebarListItem color="#36BFFA">
                <template v-slot:icon>
                  <img
                    src="@/assets/svg/clock-fast-forward.svg"
                    alt="История заказов иконка"
                  />
                </template>
                <template v-slot:body> История заказов </template>
              </SidebarListItem>
            </li>
            <li>
              <SidebarListItem color="#F670C7">
                <template v-slot:icon>
                  <img
                    src="@/assets/svg/users-01.svg"
                    alt="Реферальная система иконка"
                  />
                </template>
                <template v-slot:body> Реферальная система </template>
              </SidebarListItem>
            </li>
          </ul>
        </div>
        <div class="sidebar-support">
          <h2 class="sidebar-title sidebar-support__title">Помощь</h2>
          <ul class="sidebar-support__actions">
            <li>
              <SidebarListItem color="#FDB022">
                <template v-slot:icon>
                  <img
                    src="@/assets/svg/help-circle.svg"
                    alt="Справочный центр иконка"
                  />
                </template>
                <template v-slot:body> Справочный центр </template>
              </SidebarListItem>
            </li>
            <li>
              <SidebarListItem color="#717BBC">
                <template v-slot:icon>
                  <img
                    src="@/assets/svg/message-question-square.svg"
                    alt="Обратится в поддержку иконка"
                  />
                </template>
                <template v-slot:body> Обратится в поддержку</template>
              </SidebarListItem>
            </li>
            <li>
              <SidebarListItem color="#98A2B3">
                <template v-slot:icon>
                  <img
                    src="@/assets/svg/search-md.svg"
                    alt="История заказов иконка"
                  />
                </template>
                <template v-slot:body> Не нашли, то что искали?</template>
              </SidebarListItem>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarListItem from "../common/SidebarListItem";
import SecondaryBlueBtn from "../common/SecondaryBlueBtn";
import BlueBtn from "../common/BlueBtn.vue";
export default {
  components: {
    SidebarListItem,
    SecondaryBlueBtn,
    BlueBtn,
  },
  data() {
    return {
      username: "Иван",
      timeStamp: "Доброго времени суток",
      balance: 399,
    };
  },
  methods: {
    sendNavSidebarStatus() {
      this.$emit("disable-nav-sidebar", false);
    },
    setWelcome() {
      const currentTime = new Date().getHours();
      if (currentTime >= 5 && currentTime <= 12) {
        this.timeStamp = "Доброе утро";
      } else if (currentTime >= 12 && currentTime <= 17) {
        this.timeStamp = "Добрый день";
      } else if (currentTime >= 17 && currentTime <= 22) {
        this.timeStamp = "Добрый вечер";
      }
    },
  },
  mounted() {
    this.setWelcome();
  },
};
</script>
