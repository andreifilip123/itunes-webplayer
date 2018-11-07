<template>
  <div class="artists__container">
    <div class="song__item-wrapper" v-for="item in songs" :key="item.id">
      <a :href="item.location" class="song__item">
        <p><span class="song__title">{{item.title}}</span> - <span class="song__artist">{{item.artist}}</span></p>
        <p class="song__album">{{item.album}}</p>
      </a>
    </div>
    <!-- <div class="artist__item" v-for="song in songs" :key="song">
      {{ song }}
    </div> -->
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';

export default {
  name: 'songs',
  computed: {
    ...mapState([
      'songs'
    ])
  },
  methods: {
  }
}
</script>

<style lang="stylus">

</style>

