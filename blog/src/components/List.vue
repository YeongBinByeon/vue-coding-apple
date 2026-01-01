<template>
  <div>
    <h5>{{ item.title }}</h5>
    <p>{{ item.content }}</p>
  </div>
</template>

<script>
export default {
  name: "List",
  props:{item: Object, index: Number}
}
</script>

<style>

</style>