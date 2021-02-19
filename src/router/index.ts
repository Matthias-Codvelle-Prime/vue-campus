import { createWebHistory, createRouter } from "vue-router";
import CitiesList from "../components/CitiesList.vue";
import CitiesMapLeaflet from "../components/CitiesMapLeaflet.vue";
import City from "../components/City.vue";
import EasterEgg from "../components/EasterEgg.vue";

const routes = [
  { path: '/villes', component: CitiesList },
  { path: '/carte', component: CitiesMapLeaflet },
  { path: '/ville', component: City },
  { path: '/onenagros', component: EasterEgg}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;