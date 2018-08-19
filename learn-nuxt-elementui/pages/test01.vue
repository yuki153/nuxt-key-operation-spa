<template>
  <div class="gallery">
    <header class="gallery__header">
      <h1 class="gallery__title">作品一覧</h1>
    </header>
    <section class="contents">
      <ul class="contents__list">
          <contents-item
          ref="ooooo"
          v-for="list in response"
          :key="list.value"
          v-bind:itemName="list.title"
          v-bind:itemImg="list.img_src"
          >
          </contents-item>
          <!--<li class="test" v-for="list in lists" :key="list.value">{{list}}</li>-->
      </ul>
    </section>
  </div>
</template>

<script>
import ContentsItem from "~/components/ContentsItem.vue";

export default {
  components: {
    ContentsItem
  },
  data() {
    return {
      response: [],
      geturl: 'http://localhost:3333/products_info',
    };
  },
  created() {
    ( async () => {
    const res = await this.ajax();
      console.log(res);
      for (const value of res) {
        this.response.push(value);
      }
    })();
    /* test code 
    const obj = {};
    setTimeout(()=>{obj.data = "hello"}, 1000);
    console.log(obj);
    */
  },
  mounted() {
    console.log(this.$refs);
  },
  updated() {
    console.log(this.$refs.ooooo[0].$el);
    this.$refs.ooooo[0].$el.focus();
  },
  methods: {
    ajax() {
      const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.onloadend = () => {
          if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            resolve(response);
          }
        };
        xhr.open('GET', this.geturl);
        xhr.responseType = "text";
        xhr.send(null);
      });
      return promise;
    }
  }
};

</script>

<style scoped lang="scss">
  .gallery {
    &__header {
      display: block;
      width: 100%;
      height: 150px;
      background-color: rgb(46, 102, 255);
    }
    &__title {
      color: #fff;
      font-size: 50px;
    }
  }
</style>

