import Ember from 'ember';
import ValidationRouteMixin from '../../mixins/validation-route';

export default Ember.Route.extend(ValidationRouteMixin, {
  redirectTo: 'users',
  model: function() {
    return this.store.createRecord('user');
  }
});
