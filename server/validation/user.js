
var Validation = require('validation')
  , validators = require('validation/validators');

module.exports = Validation.extend({
  init: function() {
    this.add('firstName', validators.notEmpty, 'First name is required');
    this.add('lastName', validators.notEmpty, 'Last name is required');
    this.add('email', validators.notEmpty, 'Email is required');
    this.add('email', validators.isEmail, 'Email is invalid');
    this.add('login', validators.notEmpty, 'Login is required');
  }
});
