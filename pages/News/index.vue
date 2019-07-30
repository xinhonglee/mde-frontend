<template>
  <div id="page_news" class="main">
    <app-page-news-header/>
    <app-page-news-list/>
  </div>
</template>

<script>
  import {paintCommon} from "~/assets/js/animate";
  import AppPageNewsHeader from "~/components/Pages/News/SectionHeader";
  import AppPageNewsList from "~/components/Pages/News/SectionList";

  export default {
    name: "app-page-news",
    components: {
      AppPageNewsHeader,
      AppPageNewsList
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
      title: 'News',
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
