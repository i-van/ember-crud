import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    confirm: function(modal) {
      this.model.destroyRecord()
        .then(() => {
          modal.hide();
          this.send('closeModal');
        });
    }
  }
});
