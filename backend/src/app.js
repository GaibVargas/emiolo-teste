const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const FB = require('fb');

mongoose.connect('mongodb://localhost:27017/emiolo-teste', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

FB.options({version: 'v2.4'});
FB.extend({
  appId: '977577506079007', 
  appSecret: '093dc30838b1d056b3cf75098715b4ce'
});

const app = express();

app.use(cors());
app.use(express.json());

const User = require('./models/User');

app.post('/user/facebook', async(req, res) => {
  const { accessToken, user_id } = req.body;

  const result = await FB.api(user_id, { fields: ['id, name, picture'], access_token: accessToken });
  User.findOne({ provider_id: result.id }, (err, user) => {
    if(err) throw(err);

    if(!err && user !== null) return res.json(user);

    const newUser = new User({
      provider_id: result.id,
      name: result.name,
      image_url: result.picture.data.url
    });

    newUser.save((err) => {
      if(err) throw(err);

      return res.json(newUser);
    }); 
  });
});

app.listen(3333);