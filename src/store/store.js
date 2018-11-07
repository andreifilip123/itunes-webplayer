import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    xmlDocument: '',
    artists: [],
    songs: [],
    albums: [],
    library: [],
    results: []
  }
});

export default store;
