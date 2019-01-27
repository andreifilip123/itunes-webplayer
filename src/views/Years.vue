<template>
  <div></div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'years',
  mounted() {
    console.log('Years: Mounted');
    this.changeActiveView('year');
    console.log('Years: Change library');
    this.resetResults();
    this.makeResultsUnique();
    this.sortResults();
    console.log('Years: Reset results');
  },
  methods: {
    ...mapActions([
      'changeActiveView',
      'resetResults',
      'makeResultsUnique',
      'sortResults'
    ])
  }
};
</script>
