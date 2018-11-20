<template>
  <div></div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'songs',
  mounted() {
    console.log('Songs: Mounted');
    this.changeActiveView('title');
    console.log('Songs: Change library');
    this.resetResults();
    this.makeResultsUnique();
    this.sortResults();
    console.log('Songs: Reset results');
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
