<template>
  <section class="appointment">
    <div class="appointment-left">
      <app-google-map></app-google-map>
    </div>
    <div class="appointment-right">
      <div class="appointment-right-content v-middle_wrap">
        <div class="v-middle">
          <div class="appointment-right-title">
            <h2>Book an appointment</h2>
          </div>
          <div class="appointment-right-description">
            <p>Come say hi! Book a free appointment with us!</p>
            <p>Located just 20 minutes away from Tenerife's economic centre Santa Cruz, we are more than happy to
              welcome you in our clinic. Give us a call, and we’ll make sure to find a perfect fit for your needs.</p>
            <p>Maritima Clinic is open from</p>
            <p class="text-center">Monday to Friday from <strong>09:00</strong> to <strong>20:00</strong></p>
            <p class="d-flex"><span>Address:</span><strong>&nbsp;Avenida Marítima 29, 38530 Candelaria, Santa Cruz de
              Tenerife, Spain</strong></p>
            <p>Phone: <strong>+34 822 775 133</strong>, <strong>+34 674 354 930</strong></p>
            <p>Or send us an email to <a href="mailto:<citas@dentalesthetics.es>">citas@dentalesthetics.es</a></p>
          </div>
          <div class="appointment-right-button">
            <a href="#" class="button-extend-normal-round">Reach out</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import AppGoogleMap from "~/components/Map";

  export default {
    name: "app-page-home-appointment",
    components: {AppGoogleMap},
  }
</script>

<style scoped>

</style>
