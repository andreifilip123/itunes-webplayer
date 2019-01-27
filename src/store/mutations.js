import $ from 'jquery';

export const mutations = {
  setXmlDocument(state, payload) {
    state.xmlDocument = payload;
  },
  parseLibrary: state => {
    const library = state.xmlDocument;
    const allSongKeys = $(library).find('key:contains(Sort Name)');
    const allLibrary = [];
    allSongKeys.each((songIndex, songKey) => {
      const songParent = $(songKey).parent();
      const song = {
        artist: $(songParent)
          .find('key:contains(Sort Artist)')
          .next()
          .text(),
        album: $(songParent)
          .find('key:contains(Sort Album)')
          .next()
          .text(),
        title: $(songParent)
          .find('key:contains(Sort Name)')
          .next()
          .text(),
        genre: $(songParent)
          .find('key:contains(Genre)')
          .next()
          .text(),
        year: $(songParent)
          .find('key:contains(Year)')
          .next()
          .text(),
        location: $(songParent)
          .find('key:contains(Location)')
          .next()
          .text(),
        id: $(songParent)
          .find('key:contains(Track ID)')
          .next()
          .text()
      };
      if (song.genre !== 'Podcast') {
        allLibrary.push(song);
      }
    });
    const allLibrarySorted = allLibrary.sort((a, b) => {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      }
      return 0;
    });
    const uniqueLibrary = [...new Set(allLibrarySorted)];
    state.library = uniqueLibrary;
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
  resetResults: state => {
    state.results = state.library;
  },
  sortResults: state => {
    const results = state.results.sort((a, b) => {
      if (state.activeView) {
        if (a[state.activeView] > b[state.activeView]) {
          return 1;
        } else if (a[state.activeView] < b[state.activeView]) {
          return -1;
        }
        return 0;
      }
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      }
      return 0;
    });
    state.results = results;
  },
  makeResultsUnique: state => {
    const unique = [
      ...new Set(state.results.map(item => {
        if (state.activeView) {
          return item[state.activeView];
        }
        return item.title;
      }))
    ].map(itemProperty =>
      state.results.find(item => {
        if (state.activeView) {
          return item[state.activeView] == itemProperty;
        }
        return item.title == itemProperty;
      }));
    state.results = unique;
  }
};
