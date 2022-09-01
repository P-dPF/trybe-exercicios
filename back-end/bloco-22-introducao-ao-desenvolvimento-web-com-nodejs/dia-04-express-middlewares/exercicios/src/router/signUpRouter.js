const express = require('express');
const validateUserInfo = require('../middlewares/validateUserInfo');
const generateToken = require('../utils/generateToken');

const router = express.Router();

router.use(validateUserInfo);

router.post('/', (req, res) => {
  const token = generateToken();

  res.status(200).json({ token });
});

module.exports = router;
