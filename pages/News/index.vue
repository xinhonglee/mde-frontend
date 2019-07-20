<template>
    <div id="page_news" class="main">
        <app-page-news-header/>
        <app-page-news-content/>
    </div>
</template>

<script>
  import {paintCommon} from "~/assets/js/animate";
  import AppPageNewsHeader from "~/components/Pages/News/SectionHeader";
  import AppPageNewsContent from "~/components/Pages/News/SectionContent";
  export default {
    name: "app-page-news",
    components: {
      AppPageNewsHeader,
      AppPageNewsContent,
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
