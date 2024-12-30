const express = require('express');

const PORT = 8080;

const app = express();

// JSON 본문을 파싱하기 위한 미들웨어
app.use(express.json());

app.post('/', (req, res) => {
  console.log('Received Apple In-App Purchase Webhook:');
  console.log(req.body); // 웹훅 데이터를 콘솔에 출력

  // 예: 데이터 검증 또는 처리 로직 추가
  if (req.body && req.body.notification_type) {
    console.log(`Notification Type: ${req.body.notification_type}`);
  }

  // Apple의 웹훅은 상태 코드 200을 반환해야 함
  res.status(200).send('Webhook received');
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
