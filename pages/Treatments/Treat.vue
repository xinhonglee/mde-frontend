<template>
  <div id="page_treatments" class="main">
    <app-page-treatments-header :title="title"/>
    <app-page-treatments-treat-content/>
  </div>
</template>

<script>
  import {paintCommon} from "~/assets/js/animate";
  import AppPageTreatmentsHeader from "~/components/Pages/Treatments/SectionHeader";
  import AppPageTreatmentsMenu from "~/components/Pages/Treatments/SectionMenuBar";
  import AppPageTreatmentsTreatContent from "~/components/Pages/Treatments/SectionTreat";

  export default {
    name: "app-page-treatments-treat",
    components: {
      AppPageTreatmentsHeader,
      AppPageTreatmentsMenu,
      AppPageTreatmentsTreatContent,
    },
    data() {
      return {
        title: 'Title treatment'
      };
    },
    mounted() {
      console.log(this.title);
      paintCommon();
    },
    layout: 'default',
    head: {
      title: 'Treatment',
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
