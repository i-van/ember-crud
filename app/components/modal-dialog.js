import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['modal', 'fade'],
  didInsertElement: function() {
    this.$().modal()
      .on('hidden.bs.modal', () => {
        this.sendAction('close');
      });
  },
  actions: {
    primaryAction: function() {
      this.sendAction('primaryAction');
    }
  }
});
