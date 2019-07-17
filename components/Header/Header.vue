<template>
    <header>
        <div class="app-header">
            <app-header-contact/>
            <app-header-navigation/>
          </div>
    </header>
</template>

<script>

  import AppHeaderContact from "./Contact";
  import AppHeaderNavigation from "./Navigation";
  export default {
    name: "app-header",
    components: {
      AppHeaderNavigation,
      AppHeaderContact
    }
  }
</script>

<style scoped>

</style>
