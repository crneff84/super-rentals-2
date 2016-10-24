import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    announcementFormShow() {
      this.set('addNewAnnouncement', true);
    },

    saveAnnouncement() {
      var params = {
        weather: this.get('weather')
      };
      this.set('addNewAnnouncement', false);
      this.sendAction('saveAnnouncement', params);
    }
  }
});
