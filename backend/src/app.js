require('dotenv').config()
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const FB = require('fb');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

FB.options({version: 'v2.4'});
FB.extend({
  appId: process.env.FACEBOOK_CLIENT_ID, 
  appSecret: process.env.FACEBOOK_APP_SECRET
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

    if(!err && user !== null) return res.json({ user: user });

    const newUser = new User({
      provider_id: result.id,
      name: result.name,
      image_url: result.picture.data.url
    });

    newUser.save((err) => {
      if(err) throw(err);

      return res.json({ user: newUser });
    }); 
  });
});

app.post('/user/google', async(req, res) => {
  const { name, image_url, provider_id } = req.body;

  User.findOne({ provider_id }, (err, user) => {
    if(err) throw(err);

    if(!err && user !== null) return res.json({ user: user });

    const newUser = new User({
      provider_id,
      name,
      image_url
    });

    newUser.save((err) => {
      if(err) throw(err);

      return res.json({ user: newUser });
    }); 
  })
});

app.get('/user/:id', async(req, res) => {
  const { id } = req.params;

  const user = await User.findById(id);

  return res.json(user);
});

app.get('/users', async(req, res) => {
  const users = await User.find();

  return res.json(users);
});

app.listen(process.env.PORT || 3333);