import { createWebHistory, createRouter } from "vue-router";
import CitiesListStore from "../components/CitiesListStore.vue";
import CitiesMapLeafletStore from "../components/CitiesMapLeafletStore.vue";
import City from "../components/City.vue";
import EasterEgg from "../components/EasterEgg.vue";

const routes = [
  { path: '/villes', component: CitiesListStore },
  { path: '/carte', component: CitiesMapLeafletStore },
  { path: '/ville', component: City },
  { path: '/onenagros', component: EasterEgg}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;