
var store = require('../stores/users')
  , UserValidation = require('../validation/user');

module.exports = function(app) {
  var express = require('express');
  var router = express.Router();

  router.get('/', function(req, res) {
    var page = +req.query.page || 1
      , limit = +req.query.limit || 10;

    res.send({
      users: store.slice(limit * (page - 1), limit * page),
      meta: {
        page: page,
        limit: limit,
        total: store.length
      }
    });
  });

  router.post('/', function(req, res, next) {
    var nextId = 1 + Math.max.apply(Math, store.map(function(item) {
      return item.id;
    }));

    (new UserValidation(req.body)).validate(function(err, errors) {
      if (err) {
        return next(err);
      } else if (errors.length) {
        return res.json(422, mapErrors(errors));
      }

      var user = {
        id: nextId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        login: req.body.login,
        created: new Date(),
        updated: new Date()
      };
      store.push(user);
      res.json(201, user);
    });
  });

  router.get('/:id', function(req, res) {
    res.send({
      user: store.filter(function(item) {
        return item.id == req.params.id;
      })[0]
    });
  });

  router.put('/:id', function(req, res) {
    res.send({
      'users': {
        id: req.params.id
      }
    });
  });

  router.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/users', router);
};

/**
 * @param {Array} errors
 * @returns {Object}
 */
function mapErrors(errors) {
  return errors.reduce(function(res, item) {
    res[item.field] || (res[item.field] = []);
    res[item.field].push(item.message);
    return res;
  }, {});
}
