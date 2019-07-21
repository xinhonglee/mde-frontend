<template>
  <div id="page_treatments" class="main">
    <app-page-treatments-header/>
    <app-page-treatments-menu/>
    <app-page-treatments-dental-content/>
  </div>
</template>

<script>
  import {paintCommon} from "~/assets/js/animate";
  import AppPageTreatmentsHeader from "~/components/Pages/Treatments/SectionHeader";
  import AppPageTreatmentsMenu from "~/components/Pages/Treatments/SectionMenuBar";
  import AppPageTreatmentsDentalContent from "~/components/Pages/Treatments/SectionDental";
  export default {
    name: "app-page-treatments",
    components: {
      AppPageTreatmentsHeader,
      AppPageTreatmentsMenu,
      AppPageTreatmentsDentalContent,
    },
    data() {
      return {
        backgroundColor: '#cde8f0',
      };
    },
    mounted() {
      paintCommon();
      this.$store.commit('background/set', this.backgroundColor);
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

<style >

</style>
