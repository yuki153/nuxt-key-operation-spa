<template>
    <li class="menuItem">{{ menuValue }}</li>
</template>

<script>
export default {
    props: ['menuValue']
}
</script>

<style scoped lang="scss">
  .menuItem {
      color: blue;
  }
</style>

