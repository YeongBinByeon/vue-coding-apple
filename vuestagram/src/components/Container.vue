<template>
  <div>
    <Post v-for="(a, i) in 게시물" :게시물="게시물[i]" :key="i"></Post>
  </div>
</template>

<script>
import Post from "./Post.vue";

export default {
  components: {
    Post: Post,
  },
  props: {
    게시물: Array,
  },
};
</script>

<style></style>
