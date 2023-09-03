import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
// import { createRouter, createWebHashHistory } from "vue-router";
import VueRouter from "vue-router";
import MainPage from "./components/UI/MainPage.vue";
import ExperienceEducation from "./components/UI/ExperienceEducation.vue";
import MySkills from "./components/UI/MySkills.vue";
import ContactMe from "./components/Forms/ContactMe.vue";
import NotFound from "./components/Nav/NotFound.vue";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
  // history: createWebHashHistory(),
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/MainPage'
    },
    {
      path: "/MainPage",
      component: MainPage,
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
      path: '/:notFound(.*)',
      component: NotFound
    }
  ],
});

const app = new Vue({
  vuetify,
  router,
  render: (h) => h(App),
});

// app.use(router);
app.$mount("#app");
