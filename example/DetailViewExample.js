'use strict';

var DetailView = require('detail/DetailView'),
    Xhr = require('util/Xhr');

Xhr.ajax({
  url: '/detail.json',
  success: function (data) {
    var fire,
        view;

    fire = data.features[0];

    view = DetailView({
      el: document.querySelector('.detail-view-example'),
      data: fire
    });
    view.render();
  },
  error: function (e) {
    console.log(e.stack);
    document.querySelector('.detail-view-example').innerHTML = [
      '<p class="alert error">',
        'Failed to create detail view example.',
      '</p>'
    ].join('');
  }
});
