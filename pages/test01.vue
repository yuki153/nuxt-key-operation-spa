<template>
  <div class="gallery">
    <header class="gallery__header">
      <h1 class="gallery__title">作品一覧</h1>
      <p class="gallery__description">※左右の矢印キーで選択可能です。エンターキーで決定となります。</p>
    </header>
    <section class="contents">
      <ul class="contents__list">
          <contents-item
          ref="item"
          v-for="list in res"
          :key="list.value"
          v-bind:display="list.flag === undefined"
          v-bind:itemName="list.title"
          v-bind:itemImg="list.img_src"
          >
          </contents-item>
      </ul>
    </section>
  </div>
</template>

<script>
import ContentsItem from "~/components/ContentsItem.vue";
import XML from 'w3c-xmlhttprequest';

export default {
  components: {
    ContentsItem
  },
  data() {
    return {
      response: [],
      geturl: 'http://localhost:3333/product_list',
      index: 0,
    };
  },
  asyncData(params) {
    /* mode universal(ssr) */
    return new Promise((resolve, reject) => {
      const xhr = new XML.XMLHttpRequest();
      // xhr.withCredentials = true;
      xhr.onloadend = () => {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          resolve(response);
        }
      };
      xhr.open('GET', 'http://localhost:3333/product_list');
      xhr.responseType = "text";
      xhr.send(null);
    }).then((response)=> {
      const obj = {
        title: "Go to Nuxt top",
        img_src: '',
        flag: false,
      };
      response.push(obj)
      return {res: response};
    })
  },
  created() {
    /* mode spa */
    // (async () => {
    // const res = await this.ajax();
    //   console.log(res);
    //   for (const value of res) {
    //     this.response.push(value);
    //   }
    //   const obj = {
    //     title: "Go to Nuxt top",
    //     img_src: '',
    //     flag: false,
    //   }
    //   this.response.push(obj)
    // })();
  },
  mounted() {
    this.$el.addEventListener('keydown', this.keydownHandler);
    this.$refs.item[this.index].$el.focus();
  },
  updated() {
    /* mode spa */
    // console.log(this.$refs.item[0].$el);
    // this.$refs.item[this.index].$el.focus();
  },
  methods: {
    ajax() {
      /* mode spa */
      // const promise = new Promise((resolve, reject) => {
      //   const xhr = new XML.XMLHttpRequest();
      //   // xhr.withCredentials = true;
      //   xhr.onloadend = () => {
      //     if (xhr.status === 200) {
      //       const response = JSON.parse(xhr.responseText);
      //       resolve(response);
      //     }
      //   };
      //   xhr.open('GET', this.geturl);
      //   xhr.responseType = "text";
      //   xhr.send(null);
      // });
      // return promise;
    },
    target (index) {
      return this.$refs.item[index].$el;
    },
    keydownHandler(e) {
      switch(e.keyCode) {
        case 13: // enter
          this.target(this.index).firstElementChild.click();
          break;
        case 39: // right
          if (this.$refs.item[this.index + 1]) {
            this.index += 1;
            this.target(this.index).focus();
          }
          break;
        case 37: // left
          if (this.$refs.item[this.index - 1]) {
            this.index -= 1;
            this.target(this.index).focus();
          }
          break;
        default:
          console.log(e.keyCode);
          break;
      }
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
      font-weight: normal;
    }
    &__description {
      color: #fff;
    }
  }
</style>
