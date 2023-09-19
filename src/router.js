import Vue from "vue";
// import { createRouter, createWebHashHistory } from "vue-router";
import VueRouter from "vue-router";
import TheHome from "./App.vue";
import MyPresentation from "./components/UI/MyPresentation.vue";
import ExperienceEducation from "./components/UI/ExperienceEducation.vue";
import MySkills from "./components/UI/MySkills.vue";
import ContactMe from "./components/Forms/ContactMe.vue";
import NotFound from "./components/Nav/NotFound.vue";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  // history: createWebHashHistory(),
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/TheHome",
    },
    {
      path: "/TheHome",
      component: TheHome
    },
    {
      path: "/MyPresentation",
      component: MyPresentation,
    },
    {
      path: "/ExperienceEducation",
      component: ExperienceEducation,
    },
    {
      path: "/MySkills",
      component: MySkills,
    },
    {
      path: "/ContactMe",
      component: ContactMe,
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) {
  //     console.log("🚀 ~ file: router.js:44 ~ scrollBehavior ~ savedPosition:", savedPosition)
  //     return savedPosition;
  //   } else {
  //     console.log("🚀 ~ file: router.js:44 ~ scrollBehavior ~ savedPosition: else", savedPosition)
  //     return {
  //       x: 250,
  //       y: 175,
  //     };
  //   }
  // },
});

export default router;