const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello');
});

router.post('/', express.json(), (req, res) => {
});

module.exports = router;