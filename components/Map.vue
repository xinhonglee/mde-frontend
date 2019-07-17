<template>
    <div id="map"></div>
</template>

<script>
  import gmapsInit from '~/plugins/gmaps';

  export default {
        name: "app-google-map",
        async mounted() {
          // try {
          //   const google = await gmapsInit();
          //   const geocoder = new google.maps.Geocoder();
          //   const map = new google.maps.Map(this.$el);
          //
          //   geocoder.geocode({ address: 'France' }, (results, status) => {
          //     if (status !== 'OK' || !results[0]) {
          //       throw new Error(status);
          //     }
          //
          //     map.setCenter(results[0].geometry.location);
          //     map.fitBounds(results[0].geometry.viewport);
          //   });
          // } catch (error) {
          //   console.error(error);
          // }
      },
    }
</script>

<style scoped>

</style>
