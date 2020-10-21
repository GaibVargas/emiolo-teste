const express = require('express');
const cors = require('cors');
const FB = require('fb');

FB.options({version: 'v2.4'});
FB.extend({
  appId: '977577506079007', 
  appSecret: '093dc30838b1d056b3cf75098715b4ce'
});

const app = express();

app.use(cors());
app.use(express.json());

app.post('/user', async(req, res) => {
  const { accessToken, user_id } = req.body;

  const result = await FB.api(user_id, { fields: ['id, name, picture'], access_token: accessToken });
  //pictere.data.url
  console.log(result);
  return res.json({ ok: 'ok' });
});

app.listen(3333);