<template>
  <section class="treatments">
    <div class="container">
      <b-row>
        <b-col lg="12">
          <div class="treatments-title">
            <h2>Treatments</h2>
            <p>At Maritima, we offer three kinds of treatments. The first being Dental care. Secondly, a range of state
              of the art Esthetics treatments and lastly, our diverse variety of Natural Medicines.</p>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="4">
          <div class="treatments-content-item">
            <div class="item-image">
              <img src="~/assets/images/home/treatments/dental.png"/>
            </div>
            <div class="item-description">
              <h5>Dental</h5>
              <p>From simple check-ups to more complex restorative treatments we provide professional dental care and
                treatments.</p>
              <br>
            </div>
            <div class="item-button">
              <a href="#" class="button-extend-small-round">Read More</a>
            </div>
          </div>
        </b-col>
        <b-col lg="4">
          <div class="treatments-content-item">
            <div class="item-image">
              <img src="~/assets/images/home/treatments/esthetics.png"/>
            </div>
            <div class="item-description">
              <h5>Esthetics</h5>
              <p>From massage to more state of the art treatments like PRP and Hyaluronic acid fillings, our esthetic
                treatments ensure you feel the best version of yourself.</p>
            </div>
            <div class="item-button">
              <a href="#" class="button-extend-small-round">Read More</a>
            </div>
          </div>
        </b-col>
        <b-col lg="4">
          <div class="treatments-content-item">
            <div class="item-image">
              <img class="item-image-third" src="~/assets/images/home/treatments/natural-medicine.png"/>
            </div>
            <div class="item-description">
              <h5>Natural Medicine</h5>
              <p>We are dedicated to giving each of our patients the healthy lifestyle they deserve through our
                knowledge and experience of natural medicine and nutrition.</p>
            </div>
            <div class="item-button">
              <a href="#" class="button-extend-small-round">Read More</a>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
  </section>
</template>

<script>
  export default {
    name: "app-page-home-treatments"
  }
</script>

<style scoped>

</style>
