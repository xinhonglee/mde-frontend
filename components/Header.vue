<template>
    <header>
        <div id="app-header">
            <navigation/>
            <p class="header-title">Maritima</p>
            <p class="header-title-des">Dental & Esthetics</p>
            <p class="header-description">Specialistas En Implantología Y Estética Dental, Estética Facial Y Corporal,
                Medicina Estética. En Candelaria, Tenerife.</p>
        </div>
    </header>
</template>

<script>
  import navigation from '~/components/navigation.vue'

  export default {
    name: "app-header",
    components: {
      navigation
    }
  }
</script>

<style scoped>

</style>
