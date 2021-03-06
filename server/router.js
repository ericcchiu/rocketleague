const express = require('express');
const router = express.Router();
const { APOD, EPIC, MAAS2 } = require('./apiRoutes.js');
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
    res.status(404).send('Error retrieving data from NASA APOD API');
  }
});

router.get('/api/epic', async (req, res) => {
  try {
    const options = {
      method: 'get',
      url: EPIC + '?api_key=' + process.env.NASA_API_KEY,
      responseType: 'json'
    };
    let entry = await axios(options);
    res.status(200).json(entry.data);
  } catch (err) {
    res.status(404).send('Error retrieving data from NASA EPIC API');
  }
});

router.get('/api/maas2', async (req, res) => {
  try {
    const options = {
      method: 'get',
      url: MAAS2,
      responseType: 'json'
    };
    let entry = await axios(options);
    res.status(200).json(entry.data);
  } catch (err) {
    console.log(err);
    res.status(404).send('Error retrieving data from MAAS2 API');
  }
});

module.exports = router;