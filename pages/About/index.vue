<template>
  <div id="page-about" class="main">
    <div class="container">
      <div class="headline text-center">
        <h1>About</h1>
      </div>
    </div>
  </div>
</template>

<script>
  import {paintCommon} from "~/assets/js/animate";
  export default {
    name: "app-page-about",
    data() {
      return {};
    },
    mounted() {
      paintCommon();
    },
  }
</script>

<style scoped>

</style>
