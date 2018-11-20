<template>
  <div></div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'artists',
  mounted() {
    console.log('Artists: Mounted');
    this.changeActiveView('artist');
    console.log('Artists: Change library');
    this.resetResults();
    this.makeResultsUnique();
    this.sortResults();
    console.log('Artists: Reset results');
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
