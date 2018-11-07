export const getters = {
  artists(state) {
    const allArtists = state.songs.map(song => song.artist);
    const uniqueArtists = [...new Set(allArtists)];
    return uniqueArtists.sort();
  },
  albums(state) {
    const allAlbums = state.songs.map(song => song.album);
    const uniqueAlbums = [...new Set(allAlbums)];
    return uniqueAlbums.sort();
  }
};
