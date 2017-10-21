const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.get('/users', (req, res) => {
    res.send(users);
  });

  app.get('/admins', requireLogin, (req, res) => {
    res.send(admins);
  });
};
const users = [
  { id: 1, name: 'User 1' },
  { id: 2, name: 'User 2' },
  { id: 3, name: 'User 3' },
  { id: 4, name: 'User 4' },
  { id: 5, name: 'User 5' }
];

const admins = [
  { id: 1, name: 'Ian Ramos' },
  { id: 2, name: 'Admin 2' },
  { id: 3, name: 'Admin 3' },
  { id: 4, name: 'Admin 4' },
  { id: 5, name: 'Admin 5' }
];
