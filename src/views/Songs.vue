<template>

</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';

export default {
  name: 'songs',
  mounted() {
    this.changeLibrary('title');
  },
  methods: {
    ...mapActions([
      'changeLibrary'
    ])
  }
}
</script>