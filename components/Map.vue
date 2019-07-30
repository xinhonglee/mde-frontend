<template>
  <div id="map"></div>
</template>

<script>
  import gmapsInit from '~/plugins/gmaps';

  export default {
    name: "app-google-map",
    async mounted() {
      try {
        let google;
        if (window['gmapsCallback']) {
          google = window.google;
        } else {
          google = await gmapsInit();
        }

        const uluru = {lat: 28.3650314, lng: -16.3643976};
        const map = new google.maps.Map(this.$el, {zoom: 17, center: uluru});
        const marker = new google.maps.Marker({position: uluru, map: map});

        // const geocoder = new google.maps.Geocoder();
        // const map = new google.maps.Map(this.$el);
        // const address = `Avenida Marítima 29, 38530 Candelaria, Santa Cruz de Tenerife, Spain`;
        //
        // geocoder.geocode({address: address}, (results, status) => {
        //   if (status !== 'OK' || !results[0]) {
        //     throw new Error(status);
        //   }
        //   map.setCenter(results[0].geometry.location);
        //   map.fitBounds(results[0].geometry.viewport);
        // });
      } catch (error) {
        console.error(error);
      }
    },
  }
</script>

<style scoped>

</style>
