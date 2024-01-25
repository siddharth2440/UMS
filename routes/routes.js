const express = require('express');
const route = express.Router()
const controllers = require('../controllers/userControllers');
route.get('/',controllers.home);
route.get('/add',controllers.addNewUserPage);
route.post('/add',controllers.addUser);
route.get('/view/:id',controllers.view);
route.get('/edit/:id',controllers.edit);
route.put('/edit/:id',controllers.updateUser);
route.delete('/delete/:id',controllers.deleteUser);

module.exports = route;