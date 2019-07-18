<template>
  <div id="page_treatments" class="main">
    <app-page-treatments-header/>
    <app-page-treatments-menu/>
    <app-page-treatments-body/>
  </div>
</template>

<script>
  import {paintCommon} from "~/assets/js/animate";
  import AppPageTreatmentsHeader from "../components/Pages/Treatments/SectionHeader";
  import AppPageTreatmentsMenu from "../components/Pages/Treatments/SectionMenuBar";
  import AppPageTreatmentsBody from "../components/Pages/Treatments/SectionBody";
  export default {
    name: "app-page-treatments",
    components: {
      AppPageTreatmentsHeader,
      AppPageTreatmentsMenu,
      AppPageTreatmentsBody,
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

<style >

</style>
