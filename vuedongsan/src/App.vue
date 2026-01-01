<template>
  <!-- <div class="start" :class="{ end: 모달창열렸니 }"> -->
  <transition name="fade">
    <Modal
      @closeModal="모달창열렸니 = false"
      :원룸들="원룸들"
      :누른거="누른거"
      :모달창열렸니="모달창열렸니"
    ></Modal>
  </transition>
  <!-- </div> -->
  <Discount v-if="showDiscount === true"></Discount>

  <button @click="priceSort">가격순정렬</button>
  <button @click="sortBack">되돌리기</button>

  <div class="menu">
    <a v-for="(a, i) in 메뉴들" :key="i">{{ a }}</a>
  </div>

  <Card
    @openModal="
      모달창열렸니 = true;
      누른거 = $event;
    "
    v-for="(item, i) in 원룸들"
    :key="i"
    :index="i"
    :item="item"
  ></Card>
</template>

<script>
import data from "./assets/oneroom.js";
import Card from "./Card.vue";
import Discount from "./Discount.vue";
import Modal from "./Modal.vue";

export default {
  name: "App",
  data() {
    return {
      showDiscount: true,
      원룸들오리지널: [...data],
      누른거: 0,
      원룸들: data,
      모달창열렸니: false,
      신고수: [0, 0, 0],
      메뉴들: ["Home", "Shop", "About"],
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
    };
  },
  methods: {
    increase(i) {
      this.신고수[i] += 1;
    },
    sortBack() {
      this.원룸들 = [...this.원룸들오리지널];
    },
    priceSort() {
      this.원룸들.sort(function (a, b) {
        // return b.price - a.price; // 내림차순 정렬
        return a.price - b.price; // 오름차순 정렬
      });
    },
  },

  // mounted(){
  //   setTimeout(()=>{this.showDiscount = false;}, 2000);
  // },

  components: {
    Discount: Discount,
    Modal: Modal,
    Card: Card,
  },
};
</script>

<style>
.fade-enter-from {
  transform: translateY(-1000px);
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  transform: translateY(0px);
}

.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: all 1s;
}
.fade-leave-to {
  opacity: 0;
}

/* .start {
  opacity: 0;
  transition: all 1s;
}

.end {
  opacity: 1;
} */

body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

.room-img {
  width: 100%;
  margin-top: 40px;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}
</style>
