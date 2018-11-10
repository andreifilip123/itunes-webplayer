export const getters = {
  genres(state) {
    const allGenres = state.library.map(song => song.genre);
    const uniqueGenres = [...new Set(allGenres)];
    return uniqueGenres.sort();
  },
  artists(state) {
    const allArtists = state.library.map(song => song.artist);
    const uniqueArtists = [...new Set(allArtists)];
    return uniqueArtists.sort();
  },
  albums(state) {
    const allAlbums = state.library.map(song => song.album);
    const uniqueAlbums = [...new Set(allAlbums)];
    return uniqueAlbums.sort();
  },
  songs(state) {
    const allSongs = state.library.map(song => song.title);
    const uniqueSongs = [...new Set(allSongs)];
    return uniqueSongs.sort();
  }
};
