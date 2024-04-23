<template>
  <div class="navbar-sidebar" :class="promostatus ? 'hide-sidebar-height' : ''">
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
              <SecondaryBlueBtn @click="topUpMoneyDialog = !topUpMoneyDialog">
                <i class="fa-solid fa-plus"></i>
                <span class="text">Пополнить</span>
              </SecondaryBlueBtn>
            </div>
            <span class="balance-count"> {{ balance }}₽ </span>
          </div>
          <SidebarListItem
            @click="promoactiveDialog = !promoactiveDialog"
            style="margin-top: 12px"
            color="#e62e05"
          >
            <template v-slot:icon>
              <img
                src="@/assets/svg/sale-01.svg"
                alt="promocode activate img"
              />
            </template>
            <template v-slot:body> Активировать промокод </template>
          </SidebarListItem>
          <v-dialog class="promo" v-model="promoactiveDialog">
            <v-card
              class="modal-win__popup promo__popup"
              style="border-radius: 12px"
            >
              <div class="modal-win__popup-body">
                <div class="modal-win__popup-head">
                  <div class="rounded-border">
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.00001 6.50016H6.00668M10 10.5002H10.0067M10.6667 5.8335L5.33334 11.1668M14.6667 8.50016C14.6667 12.1821 11.6819 15.1668 8.00001 15.1668C4.31811 15.1668 1.33334 12.1821 1.33334 8.50016C1.33334 4.81826 4.31811 1.8335 8.00001 1.8335C11.6819 1.8335 14.6667 4.81826 14.6667 8.50016ZM6.33334 6.50016C6.33334 6.68426 6.18411 6.8335 6.00001 6.8335C5.81592 6.8335 5.66668 6.68426 5.66668 6.50016C5.66668 6.31607 5.81592 6.16683 6.00001 6.16683C6.18411 6.16683 6.33334 6.31607 6.33334 6.50016ZM10.3333 10.5002C10.3333 10.6843 10.1841 10.8335 10 10.8335C9.81592 10.8335 9.66668 10.6843 9.66668 10.5002C9.66668 10.3161 9.81592 10.1668 10 10.1668C10.1841 10.1668 10.3333 10.3161 10.3333 10.5002Z"
                        stroke="#344054"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <svg
                    @click="promoactiveDialog = !promoactiveDialog"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L6 18M6 6L18 18"
                      stroke="#98A2B3"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <h3 class="title promo-title">Введите промокод</h3>
                <div class="input">
                  <input
                    @input="checkingPromo"
                    v-model="promoInputValue"
                    class="rounded-border"
                    placeholder="Введите промокод"
                    :style="errorStatus ? 'border: 1px solid red;' : ''"
                  />
                  <svg
                    v-if="errorStatus"
                    class="error-decor"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.99998 5.3335V8.00016M7.99998 10.6668H8.00665M14.6666 8.00016C14.6666 11.6821 11.6819 14.6668 7.99998 14.6668C4.31808 14.6668 1.33331 11.6821 1.33331 8.00016C1.33331 4.31826 4.31808 1.3335 7.99998 1.3335C11.6819 1.3335 14.6666 4.31826 14.6666 8.00016Z"
                      stroke="#F04438"
                      stroke-width="1.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span v-if="errorStatus" style="color: red; margin-top: 5px"
                    >Такого промокода не существует</span
                  >
                </div>

                <BlueBtn :disabled="errorStatus" @click="setConfirmDialog"
                  >Активировать</BlueBtn
                >
              </div>
            </v-card>
          </v-dialog>
          <v-dialog class="promo" v-model="activatedPromoStatus">
            <v-card
              class="modal-win__popup promo__popup"
              style="border-radius: 12px"
            >
              <div class="modal-win__popup-body">
                <div class="modal-win__popup-head">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                      fill="#DCFAE6"
                    />
                    <path
                      d="M19.5 24L22.5 27L28.5 21M34 24C34 29.5228 29.5228 34 24 34C18.4772 34 14 29.5228 14 24C14 18.4772 18.4772 14 24 14C29.5228 14 34 18.4772 34 24Z"
                      stroke="#079455"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    @click="activatedPromoStatus = false"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L6 18M6 6L18 18"
                      stroke="#98A2B3"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <h3 class="title" style="margin-bottom: 0; margin-top: 15px">
                  Промокод активирован!
                </h3>
                <span
                  style="
                    color: #475467;
                    font-size: 15px;
                    line-height: 20px;
                    margin-bottom: 24px;
                  "
                  >Он автоматически применяется в корзине. <br />
                  Приятных покупок!</span
                >
                <BlueBtn> Перейти в каталог </BlueBtn>
                <v-btn
                  variant="outlined"
                  class="rounded-border"
                  @click="activatedPromoStatus = false"
                  style="
                    border-radius: 8px;
                    font-weight: 700;
                    text-transform: none;
                    margin-top: 12px;
                  "
                  color="#344054"
                  >Закрыть</v-btn
                >
              </div></v-card
            >
          </v-dialog>
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
              <SidebarListItem
                color="#98A2B3"
                @click="notFoundDialogStatus = !notFoundDialogStatus"
              >
                <template v-slot:icon>
                  <img
                    src="@/assets/svg/search-md.svg"
                    alt="История заказов иконка"
                  />
                </template>
                <template v-slot:body> Не нашли, то что искали?</template>
              </SidebarListItem>
              <v-dialog v-model="notFoundDialogStatus" class="promo">
                <v-card
                  class="modal-win__popup promo__popup"
                  style="border-radius: 12px"
                >
                  <div class="modal-win__popup-body">
                    <div class="modal-win__popup-head">
                      <h3 class="title">Не нашли то, что искали?</h3>
                      <svg
                        @click="notFoundDialogStatus = false"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 6L6 18M6 6L18 18"
                          stroke="#98A2B3"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>

                    <span
                      style="
                        color: #475467;
                        font-size: 15px;
                        line-height: 20px;
                        margin-bottom: 24px;
                      "
                      >Заполните заявку на оплату. Мы проверим <br />
                      возможность оплаты и свяжемся с вами.</span
                    >
                    <form @submit.prevent class="new-product__form">
                      <div class="new-product__description">
                        <h3 class="title">Опишите, что нужно купить</h3>
                        <textarea
                          class="rounded-border"
                          placeholder="Search for company"
                        ></textarea>
                      </div>
                      <div class="new-product__link">
                        <h3 class="title">Ссылка на товар</h3>
                        <input
                          type="text"
                          class="rounded-border"
                          placeholder="https://"
                        />
                      </div>
                      <div class="new-product__phone">
                        <h3 class="title">Телефон для связи</h3>
                        <input
                          type="tel"
                          placeholder="Введите номер"
                          class="rounded-border"
                        />
                      </div>
                      <BlueBtn
                        type="submit"
                        @click="notFoundSubmitForm = !notFoundSubmitForm"
                      >
                        Отправить заявку
                      </BlueBtn>
                    </form>
                  </div></v-card
                >
              </v-dialog>
              <v-dialog class="promo" v-model="notFoundSubmitForm">
                <v-card
                  class="modal-win__popup promo__popup"
                  style="border-radius: 12px"
                >
                  <div class="modal-win__popup-body">
                    <div class="modal-win__popup-head">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                          fill="#DCFAE6"
                        />
                        <path
                          d="M19.5 24L22.5 27L28.5 21M34 24C34 29.5228 29.5228 34 24 34C18.4772 34 14 29.5228 14 24C14 18.4772 18.4772 14 24 14C29.5228 14 34 18.4772 34 24Z"
                          stroke="#079455"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <svg
                        @click="notFoundSubmitForm = false"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 6L6 18M6 6L18 18"
                          stroke="#98A2B3"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <h3
                      class="title"
                      style="margin-bottom: 0; margin-top: 12px"
                    >
                      Заявка успешно отправлена
                    </h3>
                    <span
                      style="
                        color: #475467;
                        font-size: 15px;
                        line-height: 20px;
                        margin-bottom: 24px;
                      "
                      >Мы все проверим и свяжемся с вами в <br />
                      ближайщее время
                    </span>
                    <v-btn
                      variant="outlined"
                      class="rounded-border"
                      @click="switchDialog"
                      style="
                        border-radius: 8px;
                        font-weight: 700;
                        text-transform: none;
                        margin-top: 12px;
                      "
                      color="#344054"
                      >Закрыть</v-btn
                    >
                  </div></v-card
                >
              </v-dialog>
              <v-dialog class="promo" v-model="topUpMoneyDialog">
                <v-card
                  class="modal-win__popup promo__popup"
                  style="border-radius: 12px"
                >
                  <div class="modal-win__popup-body">
                    <div class="modal-win__popup-head">
                      <div class="head-text">
                        <h3 class="title">Пополнить баланс</h3>
                        <span
                          style="
                            color: #475467;
                            font-size: 15px;
                            line-height: 20px;
                            margin-bottom: 24px;
                          "
                          >Введите сумму пополнения
                        </span>
                      </div>
                      <svg
                        @click="topUpMoneyDialog = !topUpMoneyDialog"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 6L6 18M6 6L18 18"
                          stroke="#98A2B3"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <form @submit.prevent class="topup-balance">
                      <input
                        type="text"
                        :value="displayValue"
                        @input="setFormattedValue"
                        @blur="formatValue"
                        @focus="unformatValue"
                        ref="input"
                      />
                    </form>
                    <div class="confirm">
                      <span class="title">Итого к оплате</span>
                      <span class="balance" style="color: #475467"
                        >{{ topUpBalance }}₽</span
                      >
                    </div>
                    <BlueBtn @click="topUpAddConfirm = true"
                      >Перейти к оплате</BlueBtn
                    >
                  </div>
                </v-card>
              </v-dialog>
              <v-dialog class="promo" v-model="topUpAddConfirm">
                <v-card
                  class="modal-win__popup promo__popup"
                  style="border-radius: 12px"
                >
                  <div class="modal-win__popup-body">
                    <div class="modal-win__popup-head">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                          fill="#DCFAE6"
                        />
                        <path
                          d="M19.5 24L22.5 27L28.5 21M34 24C34 29.5228 29.5228 34 24 34C18.4772 34 14 29.5228 14 24C14 18.4772 18.4772 14 24 14C29.5228 14 34 18.4772 34 24Z"
                          stroke="#079455"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <svg
                        @click="topUpAddConfirm = false"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 6L6 18M6 6L18 18"
                          stroke="#98A2B3"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <h3
                      class="title"
                      style="margin-bottom: 0; margin-top: 12px"
                    >
                      Баланс успешно пополнен
                    </h3>
                    <BlueBtn style="margin-top: 24px">
                      Перейти в каталог
                    </BlueBtn>
                    <v-btn
                      variant="outlined"
                      class="rounded-border"
                      @click="switchTopUp"
                      style="
                        border-radius: 8px;
                        font-weight: 700;
                        text-transform: none;
                        margin-top: 12px;
                      "
                      color="#344054"
                      >Закрыть</v-btn
                    >
                  </div></v-card
                >
              </v-dialog>
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
import WhiteBtn from "@/components/common/WhiteBtn.vue";
export default {
  components: {
    SidebarListItem,
    SecondaryBlueBtn,
    BlueBtn,
    WhiteBtn,
  },
  computed: {
    displayValue() {
      // При отображении добавляем знак ₽, если значение не 0
      return this.topUpBalance === 0 ? "" : `${this.topUpBalance}₽`;
    },
  },
  data() {
    return {
      topUpAddConfirm: false,
      topUpBalance: "100",
      notFoundDialogStatus: false,
      topUpMoneyDialog: false,
      notFoundSubmitForm: false,
      promoInputValue: "",
      promoactiveDialog: false,
      errorStatus: true,
      username: "Иван",
      activatedPromoStatus: false,
      timeStamp: "Доброго времени суток",
      balance: 399,
      promostatus: false,
    };
  },
  emits: ["disableNavSidebar", "sendSidebarStatus"],
  methods: {
    switchTopUp() {
      this.topUpAddConfirm = false;
      this.topUpMoneyDialog = false;
    },
    setFormattedValue(event) {
      const value = event.target.value.replace(/[^\d]/g, ""); // Удаление всего, кроме чисел
      this.topUpBalance = value; // Обновляем числовое значение
      this.$nextTick(() => {
        // Перемещаем курсор перед знаком ₽
        const position = this.$refs.input.value.length - 1;
        this.$refs.input.setSelectionRange(position, position);
      });
    },
    formatValue() {
      // Форматирование значения с знаком ₽ при потере фокуса
      if (this.topUpBalance !== 0) {
        this.$refs.input.value = `${this.topUpBalance}₽`;
      }
    },
    unformatValue() {
      // Удаление знака ₽ при фокусе на поле
      this.$refs.input.value = this.topUpBalance.toString();
    },
    switchDialog() {
      this.notFoundSubmitForm = false;
      this.notFoundDialogStatus = false;
    },
    checkingPromo() {
      if (this.promoInputValue == "PROMO") {
        this.errorStatus = false;
      } else {
        this.errorStatus = true;
      }
    },
    sendNavSidebarStatus() {
      this.$emit("disable-nav-sidebar", false);
    },
    setConfirmDialog() {
      this.promoactiveDialog = !this.promoactiveDialog;
      this.activatedPromoStatus = true;
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
