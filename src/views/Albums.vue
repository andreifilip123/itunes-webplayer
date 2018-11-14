<template>

</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';

export default {
  name: 'albums',
  mounted() {
    console.log("Albums: Mounted");
    this.changeActiveView('album');
    console.log("Albums: Change library");
    this.resetResults();
    this.makeResultsUnique();
    this.sortResults();
    console.log("Albums: Reset results");
  },
  methods: {
    ...mapActions([
      'changeActiveView',
      'resetResults',
      'makeResultsUnique',
      'sortResults',
    ])
  }
}
</script>
