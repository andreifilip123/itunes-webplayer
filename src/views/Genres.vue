<template>

</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';

export default {
  name: 'genres',
  mounted() {
    console.log("Genres: Mounted");
    this.changeActiveView('genre');
    console.log("Genres: Change library");
    this.resetResults();
    console.log("Genres: Reset results");
  },
  methods: {
    ...mapActions([
      'changeActiveView',
      'resetResults',
    ])
  }
}
</script>

<style lang="stylus">

</style>

