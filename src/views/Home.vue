<template>
  <div class="home" v-if="resultsEmpty">
    <div class="row">
      <div class="columns large-12">
        <div class="align-middle align-center">
          <img src="../assets/itunes-large.png">
          <h3 class="home__heading">A small webplayer for iTunes</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: 'home',
  computed: {
    ...mapState([
      'results'
    ]),
    resultsEmpty() {
      return !Array.isArray(this.results) || !this.results.length
    }
  },
  mounted() {
    console.log("Home: Mounted");
    this.changeActiveView('');
    console.log("Home: Change library");
    this.resetResults();
    this.makeResultsUnique();
    this.sortResults();
    console.log("Home: Reset results");
  },
  methods: {
    ...mapActions([
      'changeActiveView',
      'resetResults',
      'makeResultsUnique',
      'sortResults',
    ])
  }
};
</script>

<style lang="stylus">

.home {
  margin-top: 50px;
  text-align: center;

  &__heading {
    background: linear-gradient(to bottom right, #FF5E50, #FC5C72, #E34DA4, #9A50F8, #4A9FFB, #29CAF9) 1 1;
    margin-top: 30px;
  }
}

</style>
