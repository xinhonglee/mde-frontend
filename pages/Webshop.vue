<template>
  <div id="page_webshop" class="main">
    <div class="container">
      <div class="headline text-center">
        <h1>Webshop</h1>
      </div>
    </div>
  </div>
</template>

<script>
  import {paintCommon} from "~/assets/js/animate";
  export default {
    name: "app-page-webshop",
    data() {
      return {};
    },
    mounted() {
      paintCommon();
      this.$store.commit('background/default');
    },
    layout: 'default',
    head: {
      title: 'MDE Frontend Development',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Your next web design and development team'
        }
      ]
    }
  }
</script>

<style scoped>

</style>
