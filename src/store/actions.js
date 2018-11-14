import $ from 'jquery';

export const actions = {
  readItunesLibrary: (context) => {
    $.ajax({
      type: 'GET',
      url: 'iTunes Music Library.xml',
      dataType: 'xml',
      success: (xml) => {
        context.commit('setXmlDocument', xml);
        context.commit('parseLibrary');
      }
    });
  },
  setResults: (context, payload) => {
    context.commit('setResults', payload);
  },
  changeActiveView: (context, payload) => {
    context.commit('changeActiveView', payload);
  },
  resetResults: (context) => {
    context.commit('resetResults');
  },
  makeResultsUnique: (context) => {
    context.commit('makeResultsUnique');
  },
  sortResults: (context) => {
    context.commit('sortResults');
  }
};
