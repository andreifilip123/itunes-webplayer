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
    console.log("Albums: Reset results");
  },
  methods: {
    ...mapActions([
      'changeActiveView',
      'resetResults',
    ])
  }
}
</script>
