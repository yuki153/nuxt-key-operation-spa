<template>
    <li>{{ item }}</li>
</template>

<script>
export default {
  props: ['item'],
  created() {
    console.log('ContentsItem_hello');
  }
}
</script>

<style scoped lang="scss">
  li {
      list-style: none;
      color: blue;
  }
</style>

