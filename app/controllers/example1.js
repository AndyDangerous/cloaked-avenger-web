import Ember from 'ember';

export default Ember.Controller.extend({
  zoom: 16,
  center: L.latLng(40.78704035888754, -73.9639949798584),
  lat: Ember.computed('center', function(key, value) {
    // setter
    if (arguments.length > 1) {
      var latlng = this.get('center');
      this.set('center', L.latLng(value, this.get('center').lng));
    }

    // getter
    return this.get('center').lat;
  }),
  lng: Ember.computed('center', function(key, value) {
    // setter
    if (arguments.length > 1) {
      var latlng = this.get('center');
      this.set('center', L.latLng(this.get('center').lat, value));
    }

    // getter
    return this.get('center').lng;
  }),

  actions: {
    increaseZoom: function() {
      this.incrementProperty('zoom');
    },
    decreaseZoom: function() {
      this.decrementProperty('zoom');
    }
  }
});
