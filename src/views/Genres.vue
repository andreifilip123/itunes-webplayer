<template>

</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';

export default {
  name: 'genres',
  mounted() {
    this.changeLibrary('genre');
  },
  methods: {
    ...mapActions([
      'changeLibrary'
    ])
  }
}
</script>

<style lang="stylus">

</style>

