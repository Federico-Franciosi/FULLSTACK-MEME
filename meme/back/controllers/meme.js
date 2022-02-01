const MemeModel = require('../db/memeSchema.js');

const getMemes = async (req, res) => {
  try {
    const meme = await MemeModel.find({});
    res.status(200).json(meme);
  } catch {
    res.status(500).json({ msg: err });
  }
};

const createMemes = async (req, res) => {
  try {
    const meme = await MemeModel.create(req.body);
    res.status(201).json(meme);
  } catch {
    res.status(500).json({ msg: err });
  }
};

const getMeme = async (req, res) => {
  try {
    const { id: memeID } = req.params;
    const meme = await MemeModel.findById({ _id: memeID });
    if (!meme) {
      res.status(404).json({ msg: 'No meme with this id' });
    }
    res.status(200).json(meme);
  } catch {
    res.status(500).json({ msg: err });
  }
};

module.exports = { getMemes, createMemes, getMeme };
