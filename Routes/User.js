const express = require('express');
const { SendSms } = require('../Controllers/Sms');
const router = express.Router();
require('dotenv').config()

router.get('/', SendSms);

module.exports = router;
