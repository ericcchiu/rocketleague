const express = require('express');
const router = express.Router();
const { APOD } = require('./apiRoutes.js');
const axios = require('axios');
require('dotenv').config();


router.get('/', (req, res) => {
  res.send('Welcome');
});

router.get('/api/apod', async (req, res) => {
  try {
    const options = {
      method: 'get',
      url: APOD + '?api_key=' + process.env.NASA_API_KEY,
      responseType: 'json'
    };
    let entry = await axios(options);
    res.status(200).json(entry.data);
  } catch (err) {
    res.status(200).send('Error retrieving data from NASA API');
  }
});

module.exports = router;