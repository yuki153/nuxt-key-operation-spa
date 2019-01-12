<template>
  <section tabindex="-1" class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        Nuxt
      </h1>
      <h2 class="subtitle">
        Press the enter key to move
      </h2>
      <div class="links">
        <nuxt-link
          ref="button"
          to="/test01"
          class="button--green"
          tabindex='-1'>Go to test page</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  },
  created() {
  },
  mounted() {
    console.log(this.$refs.button);
    this.$refs.button.$el.focus();
    this.$refs.button.$el.addEventListener('keydown', (e) => {
      console.log(e.keyCode);
      switch(e.keyCode) {
        case 13: {
          this.$router.push('test01');
        }
      }
    });
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

