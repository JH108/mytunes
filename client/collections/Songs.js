// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({
  url: 'http://parse.hrr.hackreactor.com/mytunes/classes/songs',
  model: SongModel,
  initialize: function() {
    this.fetch();
  },
  parse: function(response) {
    return response.results;
  }
});

//url
//parse => function, does something with the data
//.onSync

