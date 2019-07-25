<template>
  <section class="menu">
    <div class="container">
      <div class="inner-container">
        <div class="menu-description">
          <p>
            At Maritima, we offer three kinds of treatments. The first being Dental care. Secondly, a range of state of
            the art Esthetics treatments and lastly, our diverse variety of Natural Medicines. You’ll find more
            information regarding those specific treatments below.
          </p>
        </div>
        <div class="menu-bar">
          <ul class="menubar-content">
            <li class="menubar-item dental">
              <nuxt-link active-class="active" to="/treatments/dental" class="menu-link">Dental</nuxt-link>
            </li>
            <li class="menubar-item esthetics">
              <nuxt-link active-class="active" to="/treatments/esthetics" class="menu-link">Esthetics</nuxt-link>
            </li>
            <!--<li class="menubar-item dental-esthetics">-->
            <!--<nuxt-link active-class="active" to="/treatments/dental-esthetics" class="menu-link" exact>Dental@Esthetics-->
            <!--</nuxt-link>-->
            <!--</li>-->
            <li class="menubar-item natural-medicine">
              <nuxt-link active-class="active" to="/treatments/natural-medicine" class="menu-link">Natural
                Medicine
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "app-page-treatments-menu"
  }
</script>

<style scoped>

</style>
