<template>
  <div class="artists__container">
    <div class="artist__item" v-for="album in albums" :key="album">
      {{ album }}
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';

export default {
  name: 'artists',
  computed: {
    ...mapGetters([
      'albums'
    ])
  },
  methods: {
  }
}
</script>

<style lang="stylus">

</style>

