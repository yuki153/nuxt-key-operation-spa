<template>
    <li tabindex="-1">
      <nuxt-link
      to="/test02"
      v-if="display"
      v-on:click.native="updateProduct()"
      >
        <div class="imgWrap">
          <img v-bind:src="itemImg" alt="">
        </div>
        <p>{{ itemName }}</p>
      </nuxt-link>
      <nuxt-link class="toTop" to="/" v-else>
        <p>{{ itemName }}</p>
      </nuxt-link>
    </li>
</template>

<script>
export default {
  props: ['itemName', 'itemImg', 'display'],
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
    margin-top: 40px;
  }
  img {
    height: 90%;
  }
  p {
    color: #fff;
    text-align: center;
  }
  .toTop {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .toTop p {
    display: inline-block;
  }
</style>

