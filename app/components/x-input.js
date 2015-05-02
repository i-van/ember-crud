import Ember from 'ember';
import XForm from './x-form';

export default Ember.Component.extend({
  classNames: ['form-group'],
  classNameBindings: ['hasError:has-error'],

  form: function() {
    return this.nearestOfType(XForm);
  }.property(),

  setupBindings: function() {
    this.tearDownBindings();

    this.valueBinding = Ember.Binding.from('form.for.' + this.get('for')).to('value');
    this.valueBinding.connect(this);
    this.errorsBinding = Ember.Binding.from('form.for.errors.' + this.get('for')).to('errors');
    this.errorsBinding.connect(this);
  }.on('init').observes('for', 'form'),

  tearDownBindings: function() {
    this.valueBinding && this.valueBinding.disconnect(this);
    this.errorsBinding && this.errorsBinding.disconnect(this);
  }.on('willDestroyElement'),

  hasError: function() {
    return this.get('errors.length');
  }.property('errors'),

  inputId: function() {
    return 'x-input-' + this.get('for').underscore().replace(/_/g, '-');
  }.property('for'),

  label: function() {
    return this.get('for')
      .underscore()
      .split('_')
      .map(item => item.capitalize())
      .join(' ');
  }.property('for')
});
