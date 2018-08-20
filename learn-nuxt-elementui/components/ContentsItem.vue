<template>
    <li tabindex="-1">
      <nuxt-link to="/test02" v-on:click.native="updateProduct()">
        <div class="imgWrap">
          <img v-bind:src="itemImg" alt="">
        </div>
        <p>{{ itemName }}</p>
      </nuxt-link>
    </li>
</template>

<script>
export default {
  props: ['itemName', 'itemImg'],
  created() {
    console.log('ContentsItem_hello');
  },
  methods: {
    updateProduct() {
      console.log('v-on:click');
      const obj = {
        img: this.itemImg,
        name: this.itemName
      };
      this.$store.commit('updateProduct',obj);
      console.log(this.$store.state.product);
    }
  }
}
</script>

<style scoped lang="scss">
  li {
    list-style: none;
    float: left;
    display: flex;
    align-items: center;
    flex-flow: column nowrap;
    width: 200px;
    height: 300px;
    padding-top: 40px;
    margin: 10px 10px 0 0;
    background-color: #333;
    box-sizing: border-box;
  }
  li:hover {
    opacity: .7;
  }
  .imgWrap {
    width: 200px;
    height: 200px;
    text-align: center;
  }
  img {
    height: 90%;
  }
  p {
    color: #fff;
  }
</style>

