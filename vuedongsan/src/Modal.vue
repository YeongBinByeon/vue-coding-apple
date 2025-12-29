<template>
  <div class="black-bg" v-if="모달창열렸니">
    <div class="white-bg">
      <img :src="원룸들[누른거].image" style="width: 100%" />
      <h4>{{ 원룸들[누른거].title }}</h4>
      <p>{{ 원룸들[누른거].content }}</p>
      <!-- <input @input="month = $event.target.value" /> -->
      <!-- 아래와 같은 코드 -->
      <input v-model.number="month" />
      <p>{{ month }} 개월 선택함 : {{ 원룸들[누른거].price * month }} 원</p>
      <button @click="send">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return { month: 3 };
  },
  props: { 원룸들: Array, 누른거: Number, 모달창열렸니: Boolean }, // 데이터이름 : 자료형이름
  methods: {
    send() {
      this.$emit("closeModal");
    },
  },
};
</script>

<style></style>
