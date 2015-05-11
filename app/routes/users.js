import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    },
    limit: {
      refreshModel: true
    }
  },
  model: function(params) {
    return this.store.find('user', {
      page: params.page,
      limit: params.limit
    });
  }
});
