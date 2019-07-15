<template>
  <div id="page-home" class="main">
    <div class="container">
      <div class="headline text-center">
        <h1>Home</h1>
      </div>
    </div>
  </div>
</template>

<script>
  import {paintCommon} from "~/assets/js/animate";

  export default {
    name: "app-page-home",
    data() {
      return {};
    },
    mounted() {
      paintCommon();
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

<style>

</style>
