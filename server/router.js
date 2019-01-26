const express = require('express');
const router = express.Router();
const { APOD } = require('./apiRoutes.js');
const axios = require('axios');
require('dotenv').config();
// 'https://api.nasa.gov/planetary/apod?api_key=FsgKdkwyiqWDUyF2ftElb3e2uCNOqZ7p0xGNdD5w'

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

// router.post('/', express.json(), (req, res) => {
// });

module.exports = router;