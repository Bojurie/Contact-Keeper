const express = require('express');
const router = express.Router();

// @route  GET api/contacts
// @route  Get all users contacts
// @route  Private
router.get('/', (req, res) => {
  res.send('Get all contacts');
});

// @route  POST api/contacts
// @route  Add new contacts
// @route  Private
router.post('/', (req, res) => {
  res.send('Add contact');
});

// @route  PUT api/contacts/:id
// @route  Update
// @route  Private
router.put('/:id', (req, res) => {
  res.send('Update contact');
});

// @route  DELETE api/contacts/:id
// @route  Delete
// @route  Private
router.delete('/', (req, res) => {
  res.send('Delete contact');
});


module.exports = router;