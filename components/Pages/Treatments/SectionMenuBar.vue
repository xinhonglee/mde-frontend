<template>
    <section class="menu">
        <div class="container">
            <div class="inner-container">
                <div class="menu-description">
                    <p>
                        In our clinic we offer two kind of treatments. One focussing on Dental and one on esthetica.
                        Read more about all our treatments below. In our clinic we offer two kind of treatments. One
                        focussing on Dental and one on esthetica. Read more about all our treatments below.
                    </p>
                </div>
                <div class="menu-bar">
                    <ul class="menubar-content">
                        <li class="menubar-item dental">
                            <nuxt-link active-class="active" to="/treatments/dental" class="menu-link" exact>Dental</nuxt-link>
                        </li>
                        <li class="menubar-item esthetics">
                            <nuxt-link active-class="active" to="/treatments/esthetics" class="menu-link" exact>Esthetics</nuxt-link>
                        </li>
                        <li class="menubar-item dental-esthetics">
                            <nuxt-link active-class="active" to="/treatments/dental-esthetics" class="menu-link" exact>Dental@Esthetics
                            </nuxt-link>
                        </li>
                        <li class="menubar-item natural-medicine">
                            <nuxt-link active-class="active" to="/treatments/natural-medicine" class="menu-link" exact>Natural@Medicine
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
