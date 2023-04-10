const router = require('express').Router();
const {
  models: { User },
} = require('../db');
const { requireToken } = require('./gatekeepingMiddleware');
module.exports = router;

router.get('/', requireToken, async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'username', 'firstName', 'lastName', 'email'],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});
