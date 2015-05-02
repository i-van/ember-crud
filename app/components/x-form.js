import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['form-horizontal'],
  submit: function(event) {
    event.preventDefault();
    this.sendAction();
  }
});
