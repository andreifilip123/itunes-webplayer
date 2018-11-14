<template>
  <div class="align-middle align-center">
    <input type="text" @input="generalSearch" placeholder="🔎 Search library..." class="search">
  </div>
</template>

<script>
import $ from 'jquery';
import { mapState, mapActions } from "vuex";
export default {
  name: 'Search',
  filters: {
    highlightQuery(string,query) {
      return string.replace(query, `<span class="highlight">${query}</span>`);
    }
  },
  mounted() {
    this.resetResults();
    this.changeActiveView('');
  },
  computed: {
    ...mapState([
      'library',
      'activeView',
      'results',
    ])
  },
  methods: {
    ...mapActions([
      'setResults',
      'changeActiveView',
      'resetResults',
      'makeResultsUnique',
      'sortResults',
    ]),
    generalSearch(event) {
      const library = this.library;
      const query = event.target.value.toLowerCase();
      let results = [];
      if(query != '') {
        if(this.activeView) {
          results = library.filter(song => song[this.activeView].toLowerCase().includes(query));
        } else {
          results = library.filter(song => song.genre.toLowerCase().includes(query) || song.artist.toLowerCase().includes(query) || song.album.toLowerCase().includes(query) || song.title.toLowerCase().includes(query));
        }
        this.resetResults();
        this.setResults(results);
        this.makeResultsUnique();
        this.sortResults();
      } else {
        console.log("Empty query");
        this.resetResults();
        this.makeResultsUnique();
        this.sortResults();
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.search {
  display: block;
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  padding: 10px;
  font-size: 16px;
  text-align: center;
}
</style>
