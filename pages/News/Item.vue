<template>
  <div id="page_news" class="main">
    <app-page-news-header :title="title"/>
    <app-page-news-item-content/>
  </div>
</template>

<script>
  import {paintCommon} from "~/assets/js/animate";
  import AppPageNewsHeader from "~/components/Pages/News/SectionHeader";
  import AppPageNewsItemContent from "~/components/Pages/News/SectionItem";

  export default {
    name: "app-page-news-item",
    components: {
      AppPageNewsHeader,
      AppPageNewsItemContent
    },
    data() {
      return {
        title: 'News title'
      };
    },
    mounted() {
      paintCommon();
      this.$store.commit('background/default');
    },
  }
</script>

<style scoped>

</style>
