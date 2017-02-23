// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function() {
      if (this.at(1) === undefined) {
        this.playFirst();
      }
    });
    this.on('ended', function() {
      this.remove(this.at(0));
      if (this.at(0) !== undefined) {
        this.playFirst();
      }
    });
    this.on('dequeue', function(song) {
      // if enqueue is not working properly change to this.at(0)
      this.remove(song);
    });
  },

  playFirst: function() {
    this.at(0).play();
  }

});