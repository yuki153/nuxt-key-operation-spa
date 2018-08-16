<template>
  <section class="container">
      <menu-item menuValue="hello!"></menu-item>
      <ul>
          <menu-item v-for="list in lists" :key="list.value" v-bind:menuValue="list"></menu-item>
          <!--<li class="test" v-for="list in lists" :key="list.value">{{list}}</li>-->
      </ul>
  </section>
</template>

<script>
import MenuItem from "~/components/MenuItem.vue";

export default {
  components: {
    MenuItem
  },
  data: () => {
    return {
      lists: ["hello1", "hello2", "hello3", "hello4"]
    };
  }
};
</script>

<style scoped lang="scss">
</style>

