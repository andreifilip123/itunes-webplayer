<template>

</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';

export default {
  name: 'artists',
  mounted() {
    this.changeLibrary('artist');
  },
  methods: {
    ...mapActions([
      'changeLibrary'
    ])
  }
}
</script>
