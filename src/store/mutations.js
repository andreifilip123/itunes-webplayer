import $ from 'jquery';

export const mutations = {
  setXmlDocument(state, payload) {
    state.xmlDocument = payload;
  },
  parseLibrary: (state) => {
    const library = state.xmlDocument;
    const allSongKeys = $(library).find('key:contains(Sort Name)');
    const allSongs = [];
    allSongKeys.each((songIndex, songKey) => {
      const songParent = $(songKey).parent();
      const song = {
        artist: $(songParent).find('key:contains(Sort Artist)').next().text(),
        album: $(songParent).find('key:contains(Sort Album)').next().text(),
        title: $(songParent).find('key:contains(Sort Name)').next().text(),
        genre: $(songParent).find('key:contains(Genre)').next().text(),
        location: $(songParent).find('key:contains(Location)').next().text(),
        id: $(songParent).find('key:contains(Track ID)').next().text()
      };
      allSongs.push(song);
    });
    const uniqueSongs = [...new Set(allSongs)];
    state.songs = uniqueSongs;
  },
  setSongs: (state, payload) => {
    state.songs = payload;
  },
  setResults: (state, payload) => {
    state.results = payload;
  }
};
