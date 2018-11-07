<template>
  <div class="artists__container">
    <div class="artist__item" v-for="artist in artists" :key="artist">
      {{ artist }}
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';

export default {
  name: 'artists',
  computed: {
    ...mapGetters([
      'artists'
    ])
  },
  methods: {
  }
}
</script>

<style lang="stylus">

</style>

