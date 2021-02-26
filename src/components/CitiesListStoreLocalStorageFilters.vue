<template>
  <h1>Liste des villes</h1>
  <br /><h3>Filtré la température : </h3>
  <input type="number" placeholder="Search..." v-model="input" v-on:input="search()" ref="input"><br/>

  <div v-if="search().length != 0">
  <City  v-for="city of search()" :key="city.id" :name="city.name" :weather="city.weather"
        :temperature="city.temperature" :updated-at="city.updatedAt"></City>
  </div>
  <div v-else>
    <p>Aucun résultat pour ce filtre n'est actuellement disponible ..</p>
  </div>
</template>

<script lang="ts">
import City from "./City.vue";
import {defineComponent, computed} from 'vue';
import {useStore} from 'vuex';

export default defineComponent({
  name: 'CitiesListStoreLocalStorageFilters',
  components: {
    City
  },
  /* Lifecycle Diagram
  beforeCreate() {
    console.log('beforeCreate : ');
    console.log(this.$el);
    console.log('***************');
  },
  created() {
    console.log('created : ');
    console.log(this.$el);
    console.log('***************');
  },
  beforeMount() {
    console.log('beforeMount : ');
    console.log(this.$el);
    console.log('***************');
  },
  mounted() {
    console.log('mounted : ');
    console.log(this.$el);
    console.log('***************');
  },
  beforeUpdate() {
    console.log('beforeUpdate : ');
    console.log(this.$el);
    console.log('***************');
  },
  updated() {
    console.log('updated : ');
    console.log(this.$el);
    console.log('***************');
  },
  */
  setup() {
    const store = useStore();
    store.dispatch('getCitiesAsync');
    return {
      cities: computed(() => store.state.cities)
    }
  },
  data: () => ({
    input: ''
  }),
  methods: {
    search: function () {
      let allCities: Array<object> = [];
      for (let city of this.cities) {
        if (city.temperature >= this.input) {
          allCities.push(city)
        }
      }
      return allCities
    }
  }
})
</script>

<style scoped>
h1 {
  margin: 40px 0 0;
}
</style>