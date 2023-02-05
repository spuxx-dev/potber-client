'use strict';

module.exports = function (/* environment, appConfig */) {
  // See https://zonkyio.github.io/ember-web-app for a list of
  // supported properties

  return {
    name: 'potber',
    short_name: 'potber',
    description: '',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#060f15',
    theme_color: '#394e63',
    icons: [
      {
        src: 'favicon.ico',
        sizes: '192x192',
        type: 'image/ico',
      },
    ],
    ms: {
      tileColor: '#394e63',
    },
  };
};
