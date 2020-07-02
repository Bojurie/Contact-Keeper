const express = require('express');
const router = express.Router();

// @route  POST api/users
// @route  Register a user
// @route  Public
router.post('/', (req, res) => {
  res.send('Register a User');
});

module.exports = router;