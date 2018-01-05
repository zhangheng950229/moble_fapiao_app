import Vue from "vue";
import Router from 'vue-router';
import apply from '../views/apply/index.vue';
import history from '../views/history/index.vue';
import message from '../views/message/index.vue';

import Nav from '../views/components/navigation.vue';

Vue.use(Router);

const routes = [
  {
    path: "/",
    redirect: { path: "/apply" }
  },
  {
    path: '/apply',
    name: "apply",
    components: {
      default: apply
    }
  },
  {
    path: '/history',
    name: "history",
    components: {
      default: history
    }
  },
  {
    path: '/message',
    name: "message",
    components: {
      default: message
    }
  },
];

const router = new Router({
  routes
});
export default router;
