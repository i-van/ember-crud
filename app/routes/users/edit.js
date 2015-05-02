import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('user', params.user_id);
  },
  renderTemplate: function() {
    this.render('users.new');
  },
  actions: {
    goHome: function() {
      this.currentModel.rollback();
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
