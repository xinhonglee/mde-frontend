<template>
  <div class="app-header_navigation" :style="{background: backgroundColor}">
    <div class="container">
      <b-navbar toggleable="lg" type="dark">
        <b-navbar-brand href="/"><img src="~/assets/images/logo.svg"></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto navbar-content">
            <li class="nav-item"><nuxt-link active-class="active" to="/home" class="nav-link">Home</nuxt-link></li>
            <li class="nav-item"><nuxt-link active-class="active" to="/treatments" class="nav-link">Treatments</nuxt-link></li>
            <li class="nav-item"><nuxt-link active-class="active" to="/news" class="nav-link">News</nuxt-link></li>
            <li class="nav-item"><nuxt-link active-class="active" to="/#" class="nav-link">Webshop</nuxt-link></li>
            <li class="nav-item"><nuxt-link active-class="active" to="/contact" class="nav-link">Contact</nuxt-link></li>
          </b-navbar-nav>
          <b-navbar-nav class="appointment ml-auto">
            <a href="#" class="button-small-round">Book an appointment</a>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
  export default {
    name: "app-header-navigation",
    data() {
      return {
      }
    },
    computed: {
      backgroundColor() {
        if(this.$store.state.background.color) {
         return  this.$store.state.background.color;
        }
        return '#c0e4da';
      }
    }
  }
</script>

<style scoped>

</style>
