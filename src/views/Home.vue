<template>
  <div class="home">
    <img alt="iTunes logo" src="../assets/itunes.png">
    <Search/>
    <ItunesLibrary/>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from '@/components/Search.vue';
import ItunesLibrary from '@/components/ItunesLibrary.vue';

export default {
  name: 'home',
  components: {
    Search,
    ItunesLibrary
  },
};
</script>
