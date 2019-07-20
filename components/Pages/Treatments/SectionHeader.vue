<template>
    <section class="header">
        <div class="container h-100 position-relative">
            <div class="v-middle_wrap">
                <div class="headline v-middle">
                    <h1>{{title}}</h1>
                </div>
            </div>
        </div>
      <div class="header-bottom_back"></div>
    </section>
</template>

<script>
  export default {
    name: "app-page-treatments-header",
    props: {
      title: {
        type: String,
        default: 'All Treatments'
      }
    }
  }
</script>

<style scoped>

</style>
