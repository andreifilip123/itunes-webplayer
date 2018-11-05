<template>
  <div class="home">
    <img alt="iTunes logo" src="../assets/itunes.png">
    <Search/>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from '@/components/Search.vue';

export default {
  name: 'home',
  components: {
    Search,
  },
};
</script>
