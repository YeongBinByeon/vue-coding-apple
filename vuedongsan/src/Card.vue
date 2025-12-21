<template>
  <div>
    <img :src="item.image" class="room-img" />
    <h4 @click="send">
      {{ item.title }}
    </h4>
    <p>{{ item.price }}원</p>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: { item: Object, index: Number },
  methods: {
    send() {
      this.$emit("openModal", this.index);
    },
  },
};
</script>

<style></style>
