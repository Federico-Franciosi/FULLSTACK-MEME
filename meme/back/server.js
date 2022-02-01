const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const Cors = require('cors');
const memes = require('./routes/meme.js');
const path = require('path');

const app = express();
const port = process.env.PORT;

app.use(express.static('build'));
app.use(Cors());
app.use(express.json());
app.use('/api/v1/meme', memes);
mongoose.connect(process.env.MONGO_URI);

app.get('*', (req, res) => {
  req.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
