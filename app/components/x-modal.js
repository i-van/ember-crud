import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['modal', 'fade'],
  didInsertElement: function() {
    this.$().modal()
      .on('hidden.bs.modal', () => {
        this.sendAction('close');
      });
  },
  hide: function() {
    this.$().modal('hide');
  },
  actions: {
    primaryAction: function() {
      this.sendAction('primaryAction', this);
    }
  }
});
