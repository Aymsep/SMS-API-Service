const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config()
const SmsRouter = require('./Routes/User');



app.use('/smsApi', SmsRouter);















app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
