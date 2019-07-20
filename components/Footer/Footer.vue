<template>
    <footer>
        <div class="app-footer">
            <div class="container">
                <div class="footer-logo">
                    <img src="~/assets/images/logo.svg">
                    <div class="footer-title">
                        <h5>
                            Maritima
                        </h5>
                        <p>Dental & Esthetics</p>
                    </div>
                </div>
                <b-row class="footer-content">
                    <b-col md="6" class="footer-left d-flex">
                        <div class="footer-left-about">
                          <h5>About</h5>
                          <p>About us</p>
                          <p>Treatments</p>
                          <p>News</p>
                          <p>Webshop</p>
                          <p>Contact</p>
                        </div>
                        <div class="footer-left-contact">
                          <h5>Contact</h5>
                          <p>citas@dentalesthetics.es<br/>+34 822775133</p>
                          <p>Av Maritima 29<br/>
                            Residencial Naiguata bloque Al<br/>locales 2 y 3<br/>
                            Candelaria/Santa Cruz de Tenerify<br/>
                            38530</p>
                        </div>
                    </b-col>
                    <b-col offset-md="4" md="2" class="footer-right">
                        <div class="footer-right-content">
                            <h5>Social Media</h5>
                            <div class="footer-facebook-content d-flex my-n2">
                                <img src="~/assets/images/icons/facebook-image.png">
                                <p>Facebook</p>
                            </div>
                            <div class="footer-instagram-content mt-2 d-flex">
                                <img src="~/assets/images/icons/instagram-image.png">
                                <p>Instagram</p>
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </div>
        </div>
    </footer>
</template>

<script>
  import Pagination from "bootstrap-vue/src/mixins/pagination";

  export default {
    name: "app-footer",
    components: {Pagination}
  }
</script>

<style scoped>

</style>
