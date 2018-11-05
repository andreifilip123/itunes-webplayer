<template>
  <div class="align-middle align-center">
    <h3>Basic search functionality</h3>
    <input type="text" @input="generalSearch" class="search">
    <a v-for="item in results" :key="item.id" :href="item.location" class="song__item">
      <p><span class="song__title">{{item.title}}</span> - <span class="song__artist">{{item.artist}}</span></p>
      <p><span class="song__album">{{item.album}}</span></p>
    </a>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  mounted() {
    this.readItunesLibrary();
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
      const homeDirectory = '/Users/filip/';
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
      const allArtistKeys = $(library).find('key:contains(Artist):not(:contains( ))');
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
        let song = {
          artist: $this.getSongProperty(songParent, 'Sort Artist'),
          album: $this.getSongProperty(songParent, 'Sort Album'),
          title: $(songKey).next().text(),
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
    max-width: 80%;
    margin: 10px auto;
    padding: 10px;
    background-color: darkgray;
    border: 1px solid #cccccc;
    color: #ffffff;
    text-decoration: none;
  }

  @supports(linear-gradient) {
    .song__item {
      background-color: linear-gradient(to right, #cf8188, #90c2d9);
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
