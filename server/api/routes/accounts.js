const express = require('express');
const AccountController = require('../controllers/Account.controller');

const router = express.Router();

router.get('/user/:userid', AccountController.listbyuser);
router.get('/all', AccountController.listall);
router.delete('/:id', AccountController.delete);
router.put('/:id', AccountController.update);
router.post('/', AccountController.create);

module.exports = router;
