<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input placeholder="?" @input="search($event.target.value)" />
    <div class="post-header" v-for="(a, i) in follower" :key="i">
      <div class="profile" :style="`background-image:url(${a.image})`"></div>
      <span class="profile-name">{{ a.name }}</span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { computed, onMounted, ref, toRefs } from "vue";
import { useStore } from "vuex";

export default {
  name: "mypage",
  props: {
    one: Number,
  },
  setup(props, context) {
    let follower = ref([]);
    let followerOriginal = ref([]);

    let { one } = toRefs(props);
    console.log(one.value);

    let re = computed(() => {
      return follower.value.length;
    });
    console.log(re.value);

    let store = useStore();
    console.log(store.state.name);

    onMounted(() => {
      axios.get("/follower.json").then((a) => {
        follower.value = a.data;
        followerOriginal.value = [...a.data];
      });
    });

    function search(검색어) {
      let newFollower = follower.value.filter((a) => {
        return a.name.indexOf(검색어) != -1;
      });
      follower.value = [...newFollower];
    }

    return { follower, search };
  },

  data() {
    return {};
  },
};
</script>

<style></style>
