<template>
  
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ItunesLibrary',
  mounted() {
    this.readItunesLibrary();
  },
  methods: {
    ...mapActions([
      'readItunesLibrary',
    ])
  }
}
</script>
