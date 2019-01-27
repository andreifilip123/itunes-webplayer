import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Genres from './views/Genres.vue';
import Artists from './views/Artists.vue';
import Albums from './views/Albums.vue';
import Songs from './views/Songs.vue';
import Years from './views/Years.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/genres',
      name: 'genres',
      component: Genres
    },
    {
      path: '/artists',
      name: 'artists',
      component: Artists,
    },
    {
      path: '/albums',
      name: 'albums',
      component: Albums,
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs,
    },
    {
      path: '/years',
      name: 'years',
      component: Years,
    },
  ],
});
