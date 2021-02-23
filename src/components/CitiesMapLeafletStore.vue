<template>
  <div style="height: 100vh; width: 100vw;">
    <l-map
      v-model="zoom"
      v-model:zoom="zoom"
      :center="[45.8910906, 6.0925617]"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></l-tile-layer>

      <l-marker v-for="city in cities" :lat-lng="[city.lat, city.lon]" :key="city.name">
        <l-icon :icon-url="`https://openweathermap.org/img/wn/${city.icon}.png`" :icon-size="iconSize" />
      </l-marker>
    </l-map>
  </div>
</template>

<script>
  import {
    LMap,
    LTileLayer,
    LMarker,
    LIcon,
  } from "@vue-leaflet/vue-leaflet";
  import "leaflet/dist/leaflet.css";
  import { defineComponent, computed } from 'vue';
  import { useStore } from 'vuex';

  export default defineComponent ({
    name: 'CitiesMapLeafletStore',
    components: {
      LMap,
      LTileLayer,
      LMarker,
      LIcon,
    },
    setup () {
      const store = useStore();

      store.dispatch('getCitiesAsync');
      return {
        cities: computed( () => store.state.cities),
        zoom: 12,
        iconSize: [store.state.iconWidth, store.state.iconHeight]
      }
    }
  })
</script>

<style scoped>
  h1 {
    margin: 40px 0 0;
  }

</style>
