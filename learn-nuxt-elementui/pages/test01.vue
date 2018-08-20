<template>
  <div class="gallery">
    <header class="gallery__header">
      <h1 class="gallery__title">作品一覧</h1>
    </header>
    <section class="contents">
      <ul class="contents__list">
          <contents-item
          ref="item"
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
      index: 0,
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
    // document.addEventListener('keydown', this.keydownHandler);
  },
  mounted() {
    this.$el.addEventListener('keydown', this.keydownHandler);
  },
  updated() {
    console.log(this.$refs.item[0].$el);
    this.$refs.item[this.index].$el.focus();
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
    }
  }
</style>

