import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',
  classNames: ['pagination'],
  itemsPerPage: null,
  currentPage: null,
  totalItems: null,

  pages: function() {
    var currentPage = this.get('currentPage')
      , totalPages = Math.ceil(this.get('totalItems') / this.get('itemsPerPage'))
      , previous = Math.max(currentPage - 1, 1)
      , next = Math.min(currentPage + 1, totalPages)
      , from = currentPage - 2
      , to = currentPage + 2
      , isFirst = currentPage <= 1
      , isLast = currentPage >= totalPages
      , items = [];

    if (totalPages <= 1) {
      return items;
    }

    if (from < 1) {
      from = 1;
      to = from + 4;
    } else if (to > totalPages) {
      to = totalPages;
      from = to - 4;
    }
    from = Math.max(from, 1);
    to = Math.min(to, totalPages);

    items.push({
      className: isFirst ? 'disabled': '',
      page: previous,
      label: '&laquo;'
    });

    for (var i = from; i <= to; i++) {
      items.push({
        className: currentPage == i ? 'active': '',
        page: i,
        label: i
      });
    }

    items.push({
      className: isLast ? 'disabled': '',
      page: next,
      label: '&raquo;'
    });

    return items;
  }.property('currentPage', 'itemsPerPage', 'totalItems'),

  actions: {
    goPage: function(page) {
      this.set('currentPage', page);
    }
  }
});
