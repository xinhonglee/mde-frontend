<template>
  <div id="page_contact" class="main">
    <app-page-contact-form/>
  </div>
</template>

<script>
  import {paintCommon} from "~/assets/js/animate";
  import AppPageContactForm from "~/components/pages/Contact/SectionForm";
  export default {
    name: "app-page-contact",
    components: {
      AppPageContactForm
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
      title: 'Contact',
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
