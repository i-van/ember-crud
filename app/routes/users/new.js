import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('user');
  },
  actions: {
    goHome: function() {
      this.currentModel.destroyRecord();
      this.transitionTo('users');
    },
    save: function(modal) {
      this.currentModel.save()
        .then(() => {
          modal.$().modal('hide');
          this.transitionTo('users');
        });
    }
  }
});
