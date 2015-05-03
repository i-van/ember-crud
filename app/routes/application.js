import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    openModal: function(modalName, model) {
      this.render(modalName, {
        outlet: 'modal',
        into: 'application',
        model: model
      });
    },
    closeModal: function() {
      this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    }
  }
});
