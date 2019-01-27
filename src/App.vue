<template>
  <div id="app">
    <ItunesLibrary/>
    <div class="top-bar">
      <div class="top-bar-left">
        <ul class="dropdown menu">
          <li class="align-self-middle">
            <router-link to="/">
              <img class="responsive-image" alt="iTunes logo" src="./assets/itunes-small.png">
            </router-link>
          </li>
          <li>
            <router-link to="/genres">Genres</router-link>
          </li>
          <li>
            <router-link to="/artists">Artists</router-link>
          </li>
          <li>
            <router-link to="/albums">Albums</router-link>
          </li>
          <li>
            <router-link to="/songs">Songs</router-link>
          </li>
          <li>
            <router-link to="/years">Years</router-link>
          </li>
        </ul>
      </div>
      <div class="top-bar-right">
        <Search/>
      </div>
    </div>
    <Results/>
    <router-view/>
  </div>
</template>

<script>
import Search from '@/components/Search.vue';
import Results from '@/components/Results.vue';
import ItunesLibrary from '@/components/ItunesLibrary.vue';

export default {
  name: 'app',
  components: {
    Search,
    ItunesLibrary,
    Results
  }
};
</script>


<style lang="stylus">
@import '~foundation-sites/dist/css/foundation.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

.top-bar {
  padding: 20px;
}

.menu {
  & a {
    display: inline-block;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
