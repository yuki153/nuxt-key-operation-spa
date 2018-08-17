<template>
  <div class="gallery">
    <header class="gallery__header">
      <h1 class="gallery__title">作品一覧</h1>
    </header>
    <section class="contents">
      <ul class="contents__list">
          <contents-item
          v-for="list in lists"
          :key="list.value"
          v-bind:item="list"
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
      lists: ["hello1", "hello2", "hello3", "hello4"],
      postUrl: 'http://localhost:3000/dummy_products_info.json',
    };
  },
  created() {
    //( async () => {
    // const res = await this.post();
    //  console.log(res);
    //})();
    console.log(this.post2());
  },
  methods: {
    post() {
      const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.onloadend = () => {
          if (xhr.status === 200) {
            console.dir(xhr);
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            resolve(response);
          }
        };
        console.log('sfgdxgdwge');
        xhr.open('GET', this.postUrl);
        xhr.responseType = "text";
        xhr.send(null);
      });
      return promise;
    },
     post2() {
      fetch(this.postUrl, {
        method: 'POST',
      })
      .then(response => {
        return response.text();
      })
    }
  }
};

</script>

<style scoped lang="scss">
  .gallery {
    &__header {
      display: block;
      width: 100%;
      height: 200px;
      background-color: rgb(46, 102, 255);
    }
    &__title {
      color: #fff;
      font-size: 50px;
    }
  }
</style>

