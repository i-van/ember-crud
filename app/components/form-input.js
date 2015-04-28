import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['form-group'],
  classNameBindings: ['hasError:has-error'],
  hasError: function() {
    return this.get('errors');
  }.property('errors')
});
