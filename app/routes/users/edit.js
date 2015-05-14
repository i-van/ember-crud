import UsersNewRoute from './new';

export default UsersNewRoute.extend({
  model: function(params) {
    return this.store.find('user', params.user_id);
  },
  renderTemplate: function(controller, model) {
    this.render('users.new', {
      controller: controller,
      model: model
    });
  }
});
