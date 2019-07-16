<template>
  <div id="page_home" class="main">
    <app-page-home-header/>
    <app-page-home-tenerife/>
    <app-page-home-about/>
    <app-page-home-treatments/>
    <app-page-home-shop/>
  </div>
</template>

<script>
  import {paintCommon} from "~/assets/js/animate";
  import AppPageHomeHeader from "~/components/Pages/Home/SectionHeader";
  import AppPageHomeTenerife from "../components/Pages/Home/SectionTenerife";
  import AppPageHomeAbout from "../components/Pages/Home/SectionAbout";
  import AppPageHomeTreatments from "../components/Pages/Home/SectionTreatments";
  import AppPageHomeShop from "../components/Pages/Home/SectionShop";

  export default {
    name: "app-page-home",
    components: {
      AppPageHomeTenerife,
      AppPageHomeHeader,
      AppPageHomeAbout,
      AppPageHomeTreatments,
      AppPageHomeShop,
    },
    data() {
      return {};
    },
    mounted() {
      paintCommon();
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

<style>

</style>
