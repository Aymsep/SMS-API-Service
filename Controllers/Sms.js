const {GetInformation} = require('../Api/Sms');
exports.SendSms = async (req, res) => {
    const {from,text} = req.headers;
    const response = await GetInformation(from,text)
    res.json(response)
}