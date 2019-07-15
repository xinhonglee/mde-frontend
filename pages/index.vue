<template>
    <div id="page_home" class="main">
        <div>
            <app-page-home-header/>
        </div>
        <div>
            <app-page-home-tenerife/>
        </div>
        <div>
            <app-page-home-about/>
        </div>
        <div>
            <app-page-home-treatments/>
        </div>
    </div>
</template>

<script>
  import {paintCommon} from "~/assets/js/animate";
  import AppPageHomeHeader from "~/components/Pages/Home/SectionHeader";
  import AppPageHomeTenerife from "../components/Pages/Home/SectionBodyTenerife";
  import AppPageHomeAbout from "../components/Pages/Home/SectionBodyAbout";
  import AppPageHomeTreatments from "../components/Pages/Home/SectionBodyTreatments";

  export default {
    name: "app-page-home",
    components: {
      AppPageHomeTenerife,
      AppPageHomeHeader,
      AppPageHomeAbout,
      AppPageHomeTreatments,
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
