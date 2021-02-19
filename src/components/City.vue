<template>
  <div>
    <h2>{{name}}</h2>
    <p>Temps : {{weather}} - Température : {{temperature}}°C</p>
    <p><em>Dernière mise à jour : {{formattedDate}}</em></p>
  </div>
</template>

<script lang="ts">
  import {format, register} from 'timeago.js';
  import timeAgoFr from  'timeago.js/esm/lang/fr';
  import { defineComponent } from 'vue';

  register('fr', timeAgoFr);

  export default defineComponent ({
    name: 'City',
    props: {
      name: String,
      weather: String,
      temperature: Number,
      updatedAt: Number
    },
    computed: {
      formattedDate: function(): String {
        if (this.updatedAt) {
          return format(new Date(this.updatedAt * 1000), 'fr');
        }
        return '';
      }
    }
  })
</script>

<style scoped>
  h1 {
    margin: 40px 0 0;
  }
</style>
