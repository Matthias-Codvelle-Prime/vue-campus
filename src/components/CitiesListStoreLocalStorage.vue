<template>
  <div>
    <h1>Liste des villes</h1>
    <City v-for="city of cities" :key="city.id" :name="city.name" :weather="city.weather" :temperature="city.temperature" :updated-at="city.updatedAt"></City>
  </div>
</template>

<script lang="ts">
  import City from "./City.vue";
  import { defineComponent, computed, onMounted } from 'vue';
  import { useStore } from 'vuex';

  export default defineComponent ({
    name: 'CitiesListStoreLocalStorage',
    components: {
      City
    },
    setup () {
      const store = useStore();

      onMounted(() => {
        store.dispatch('getCitiesAsync');
      })

      return {
        cities: computed( () => store.state.cities)
      }
    }
  })
</script>

<style scoped>
  h1 {
    margin: 40px 0 0;
  }
</style>
