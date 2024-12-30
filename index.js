const express = require('express');

const PORT = 8080;

const app = express();

app.get('/', (req, res) => {
  console.log(req.body);
  console.log('헬로우 ');
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
