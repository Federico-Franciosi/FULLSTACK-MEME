const express = require('express');
const router = express.Router();

const { getMemes, createMemes, getMeme } = require('../controllers/meme.js');

router.route('/').get(getMemes).post(createMemes);
router.route('/:id').get(getMeme);

module.exports = router;
