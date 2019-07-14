<template>
    <div id="app">
        <app-header/>
        <div class="app-body">
            <nuxt/>
        </div>
        <app-footer/>
    </div>
</template>

<style>

</style>
<script>
  import AppHeader from "../components/Header/Header";
  import AppFooter from "../components/Footer/Footer";

  export default {
    components: {AppFooter, AppHeader},
  }
</script>
