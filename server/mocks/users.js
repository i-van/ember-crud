
var fixtures = [
  { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@mail.com', login: 'john', created: new Date(), updated: new Date() },
  { id: 2, firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@mail.com', login: 'jane', created: new Date(), updated: new Date() }
];

module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();

  usersRouter.get('/', function(req, res) {
    var page = +req.query.page || 1
      , limit = +req.query.limit || 10;

    res.send({
      users: fixtures.slice(limit * (page - 1), limit * page),
      meta: {
        page: page,
        limit: limit,
        total: fixtures.length
      }
    });
  });

  usersRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  usersRouter.get('/:id', function(req, res) {
    res.send({
      'users': {
        id: req.params.id
      }
    });
  });

  usersRouter.put('/:id', function(req, res) {
    res.send({
      'users': {
        id: req.params.id
      }
    });
  });

  usersRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/users', usersRouter);
};
