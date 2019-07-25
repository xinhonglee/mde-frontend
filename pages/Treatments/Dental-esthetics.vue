<template>
  <div id="page_treatments" class="main">
    <app-page-treatments-header/>
    <app-page-treatments-menu/>
    <app-page-treatments-dental-esthetics-content/>
  </div>
</template>

<script>
  import {paintCommon} from "~/assets/js/animate";
  import AppPageTreatmentsHeader from "~/components/Pages/Treatments/SectionHeader";
  import AppPageTreatmentsMenu from "~/components/Pages/Treatments/SectionMenuBar";
  import AppPageTreatmentsDentalEstheticsContent from "~/components/Pages/Treatments/SectionDentalEsthetics";

  export default {
    name: "app-page-treatments-dental-esthetics",
    components: {
      AppPageTreatmentsHeader,
      AppPageTreatmentsMenu,
      AppPageTreatmentsDentalEstheticsContent,
    },
    data() {
      return {
        backgroundColor: `linear-gradient(to right, #cde8f0, #cde8f0 50%, #c0e4da 50%, #c0e4da 100%)`,
      };
    },
    mounted() {
      paintCommon();
      this.$store.commit('background/set', this.backgroundColor);
    },
    layout: 'default',
    head: {
      title: 'Dental Esthetics Category',
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
