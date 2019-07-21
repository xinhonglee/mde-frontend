<template>
  <div id="page_contact" class="main">
    <div class="container">
      <div class="headline text-center">
        <h1>Contact</h1>
      </div>
    </div>
  </div>
</template>

<script>
  import {paintCommon} from "~/assets/js/animate";
  export default {
    name: "app-page-contact",
    data() {
      return {};
    },
    mounted() {
      paintCommon();
      this.$store.commit('background/default');
    },
    layout: 'default',
    head: {
      title: 'Contact',
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
