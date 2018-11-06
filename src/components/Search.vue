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
export default {
  name: 'Search',
  mounted() {
    this.readItunesLibrary();
  },
  filters: {
    highlightQuery(string,query) {
      return string.replace(query, `<span class="highlight">${query}</span>`);
    }
  },
  data() {
    return {
      xmlDocument: '',
      artists: [],
      songs: [],
      albums: [],
      library: [],
      results: []
    };
  },
  methods: {
    readItunesLibrary () {
      const $this = this;
      $.ajax({
        type: "GET" ,
        url: "iTunes Music Library.xml" ,
        dataType: "xml" ,
        success: function(xml) {
          $this.$set($this, 'xmlDocument', xml);
          $this.getLibrary();
        }
      });
    },
    getArtists() {
      const $this = this;
      const library = $this.xmlDocument;
      const allArtistKeys = $(library).find('key:contains(Sort Artist)');
      const allArtists = [];
      allArtistKeys.each((artistIndex,artistKey) => {
        let artist = $(artistKey).next().text();
        allArtists.push(artist);
      });
      const uniqueArtists = [...new Set(allArtists)];
      $this.$set($this, 'artists', uniqueArtists);
    },
    getSongProperty(song, property) {
      return song.find(`key:contains(${property})`).next().text();
    },
    getSongs() {
      const $this = this;
      const library = $this.xmlDocument;
      const allSongKeys = $(library).find('key:contains(Sort Name)');
      const allSongs = [];
      allSongKeys.each((songIndex,songKey) => {
        const songParent = $(songKey).parent();
        const song = {
          artist: $this.getSongProperty(songParent, 'Sort Artist'),
          album: $this.getSongProperty(songParent, 'Sort Album'),
          title: $this.getSongProperty(songParent, 'Sort Name'),
          genre: $this.getSongProperty(songParent, 'Genre'),
          location: $this.getSongProperty(songParent, 'Location'),
          id: $this.getSongProperty(songParent, 'Track ID')
        };
        allSongs.push(song);
      });
      const uniqueSongs = [...new Set(allSongs)];
      $this.$set($this, 'songs', uniqueSongs);
    },
    getAlbums() {
      const $this = this;
      const library = $this.xmlDocument;
      const allAlbumKeys = $(library).find('key:contains(Sort Album)');
      const allAlbums = [];
      allAlbumKeys.each((albumIndex,albumKey) => {
        let album = $(albumKey).next().text();
        allAlbums.push(album);
      });
      const uniqueAlbums = [...new Set(allAlbums)];
      $this.$set($this, 'albums', uniqueAlbums);
    },
    getLibrary() {
      const $this = this;
      const library = [];
      $this.getSongs();
      library.push(...$this.songs);
      $this.$set($this, 'library', library);
    },
    generalSearch(event) {
      const $this = this;
      const library = $this.library;
      const query = event.target.value.toLowerCase();
      let results = [];
      if(query != '') {
        results = library.filter(song => song.title.toLowerCase().includes(query) || song.artist.toLowerCase().includes(query) || song.album.toLowerCase().includes(query));
      }
      $this.$set($this, 'results', results);
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
