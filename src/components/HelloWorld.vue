<template>
    <p>Work in progress</p>
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
      library: []
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
          location: $this.getSongProperty(songParent, 'Location')
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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
