<template>
  <section class="appointment">
    <div class="appointment-left">
      <div class="appointment-left-content v-middle_wrap">
        <div class="v-middle">
          <div class="appointment-left-title">
            <h2>What to know more</h2>
          </div>
          <div class="appointment-left-description">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.</p>
          </div>
          <div class="appointment-left-button">
            <a href="#" class="button-extend-normal-round">Reach out</a>
          </div>
        </div>
      </div>
    </div>
    <div class="appointment-right">
      <div id="map">
        <app-google-map></app-google-map>
      </div>
    </div>
  </section>
</template>

<script>
  import AppGoogleMap from "~/components/Map";

  export default {
    name: "app-page-contact-appointment",
    components: {AppGoogleMap},
  }
</script>

<style scoped>

</style>
