<template>
  <div class="app-header_navigation">
    <div class="container v-middle_wrap">
      <b-navbar toggleable="lg" type="dark" class="v-middle">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <li class="nav-item"><nuxt-link active-class="active" to="/about" class="nav-link" exact>About</nuxt-link></li>
            <li class="nav-item"><nuxt-link active-class="active" to="/treatments" class="nav-link" exact>Treatments</nuxt-link></li>
            <li class="nav-item"><nuxt-link active-class="active" to="/contact" class="nav-link" exact>Contact</nuxt-link></li>
            <li class="nav-item"><nuxt-link active-class="active" to="/webshop" class="nav-link" exact>Webshop</nuxt-link></li>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
  export default {
    name: "app-header-navigation"
  }
</script>

<style scoped>

</style>
