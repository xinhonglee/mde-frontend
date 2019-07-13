<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
      <div id="main">
        <nuxt />
      </div>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<style>

</style>
<script>
  import AppHeader from "../components/Header";
  import AppFooter from "../components/Footer";
  export default {
    components: {AppFooter, AppHeader}
  }
</script>
