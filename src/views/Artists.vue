<template>

</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';

export default {
  name: 'artists',
  mounted() {
    console.log("Artists: Mounted");
    this.changeActiveView('artist');
    console.log("Artists: Change library");
    this.resetResults()
    console.log("Artists: Reset results");
  },
  methods: {
    ...mapActions([
      'changeActiveView',
      'resetResults'
    ])
  }
}
</script>
