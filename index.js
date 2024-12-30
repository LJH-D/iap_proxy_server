const express = require('express');
const axios = require('axios');
const jwt = require('jsonwebtoken');
const PORT = 8080;

const app = express();

// JSON 본문을 파싱하기 위한 미들웨어
app.use(express.json());

app.post('/', async (req, res) => {
  console.log('Received Apple In-App Purchase Webhook:');
  console.log(jwt.verify(req.body.signedPayload));
  await axios.post('http://15.164.123.51:18080/v1/receipts/app-store-notifications', req.body);
  res.status(200).send('Webhook received');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
