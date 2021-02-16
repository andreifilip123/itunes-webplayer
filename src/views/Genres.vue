<template>
  <div></div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'genres',
  mounted() {
    console.log('Genres: Mounted');
    this.changeActiveView('genre');
    console.log('Genres: Change library');
    this.resetResults();
    this.makeResultsUnique();
    this.sortResults();
    console.log('Genres: Reset results');
  },
  methods: {
    ...mapActions([
      'changeActiveView',
      'resetResults',
      'makeResultsUnique',
      'sortResults',
    ])
  }
};
</script>

<style lang="stylus">

</style>
