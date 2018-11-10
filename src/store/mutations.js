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
  },
  changeActiveView: (state, payload) => {
    state.activeView = payload;
  },
  resetResults: (state) => {
    // Sort results
    const results = state.library.sort((a, b) => {
      if (a[state.activeView] > b[state.activeView]) {
        return 1;
      } else if (a[state.activeView] < b[state.activeView]) {
        return -1;
      }
      return 0;
    });
    // Make results unique
    const uniqueResults = [];
    results.forEach(result => {
      let resultExists = false;
      uniqueResults.forEach(item => {
        if (item[state.activeView] == result[state.activeView]) {
          resultExists = true;
        }
      });
      if (!resultExists) {
        uniqueResults.push(result);
      }
    });
    state.results = uniqueResults;
  }
};
