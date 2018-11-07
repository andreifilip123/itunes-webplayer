<template>
  <div class="align-middle align-center">
    <h3>Basic search functionality</h3>
    <input type="text" @input="generalSearch" class="search">
    <div class="song__item-wrapper" v-for="item in results" :key="item.id">
      <a :href="item.location" class="song__item">
        <p><span class="song__title">{{item.title}}</span> - <span class="song__artist">{{item.artist}}</span></p>
        <p class="song__album">{{item.album}}</p>
      </a>
    </div>
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
  computed: {
    ...mapState([
      'songs',
      'results',
    ])
  },
  methods: {
    ...mapActions([
      'setResults'
    ]),
    generalSearch(event) {
      const library = this.songs;
      const query = event.target.value.toLowerCase();
      let results = [];
      if(query != '') {
        results = library.filter(song => song.title.toLowerCase().includes(query) || song.artist.toLowerCase().includes(query) || song.album.toLowerCase().includes(query));
      }
      this.setResults(results);
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
  font-size: 20px;
  text-align: center;
}

.song {
  &__item {
    display: block;
    padding: 10px;
    background: darkgray;
    background: linear-gradient(to bottom right, #FF5E50, #FC5C72, #E34DA4, #9A50F8, #4A9FFB, #29CAF9);
    filter: grayscale(75%);
    color: #ffffff;
    text-decoration: none;

    &-wrapper {
      max-width: 80%;
      margin: 10px auto;
      border-width: 8px;
      border-style: solid;
      filter: grayscale(25%);
      border-image: linear-gradient(to bottom right, #FF5E50, #FC5C72, #E34DA4, #9A50F8, #4A9FFB, #29CAF9) 1 1;

      &:hover {
        filter: grayscale(0%);
      }
    }

    &:hover {
      background: linear-gradient(to bottom right, #FF5E50, #FC5C72, #E34DA4, #9A50F8, #4A9FFB, #29CAF9);
      filter: grayscale(0%);
    }
  }

  @supports(linear-gradient) {
    .song__item {
    }
  }

  &__title {
    font-size: 20px;
    font-weight: 900;
  }

  &__artist {
    font-size: 20px;
    font-weight: 700;
  }

  &__album {
    font-size: 16px;
    font-weight: 500;
  }
}

</style>
