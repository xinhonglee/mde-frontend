<template>
  <div id="page_home" class="main">
    <app-page-home-header/>
    <app-page-home-tenerife/>
    <app-page-home-about/>
    <app-page-home-treatments/>
    <app-page-home-shop/>
    <app-page-home-news/>
    <app-page-home-appointment/>
  </div>
</template>

<script>
  import {paintCommon} from "~/assets/js/animate";
  import AppPageHomeHeader from "~/components/Pages/Home/SectionHeader";
  import AppPageHomeTenerife from "../components/Pages/Home/SectionTenerife";
  import AppPageHomeAbout from "../components/Pages/Home/SectionAbout";
  import AppPageHomeTreatments from "../components/Pages/Home/SectionTreatments";
  import AppPageHomeShop from "../components/Pages/Home/SectionShop";
  import AppPageHomeNews from "../components/Pages/Home/SectionNews";
  import AppPageHomeAppointment from "../components/Pages/Home/SectionAppointment";
  export default {
    name: "app-page-about",
    components: {
      AppPageHomeTenerife,
      AppPageHomeHeader,
      AppPageHomeAbout,
      AppPageHomeTreatments,
      AppPageHomeShop,
      AppPageHomeNews,
      AppPageHomeAppointment
    },
    data() {
      return {};
    },
    mounted() {
      paintCommon();
      this.$store.commit('background/default');
    },
    layout: 'default',
    head: {
      title: 'MDE Frontend Development',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Your next web design and development team'
        }
      ]
    }
  }
</script>

<style scoped>

</style>
