<template>
    <div id="app">
        <app-header></app-header>
        <div id="main">
            <nuxt/>
        </div>
        <app-footer></app-footer>
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
