import {RouteRecordRaw} from "vue-router";
import ContactComponent from "@/static/ContactComponent.vue";
import AboutComponent from "@/static/about/AboutComponent.vue";

export const staticVueRoutes = [
  {
    path: '/about',
    component: AboutComponent,
  },
  {
    path: '/contact',
    component: ContactComponent,
  }
] satisfies RouteRecordRaw[];
