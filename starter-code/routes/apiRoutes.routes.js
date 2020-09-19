const express = require('express');
const Celebrity = require('../models/Celebrity');

const router = express.Router();

router.get('/celebrities', async (req, res) => {
  const { name } = req.query;

  console.log(req.query)

  const regex = new RegExp(name, 'i');

  console.log(regex)

  const celebrities = await Celebrity.find({
    name: { $regex: regex },
  });

  res.json({ celebrities });
});

module.exports = router;
