import Ember from 'ember';

export default Ember.Mixin.create({
  redirectTo: null,
  actions: {
    cancel: function() {
      this.currentModel.get('isNew')
        ? this.currentModel.destroyRecord()
        : this.currentModel.rollback();

      this.transitionTo(this.redirectTo);
    },
    save: function(modal) {
      this.currentModel.save()
        .then(() => {
          modal.$().modal('hide');
          this.transitionTo(this.redirectTo);
        });
    }
  }
});
