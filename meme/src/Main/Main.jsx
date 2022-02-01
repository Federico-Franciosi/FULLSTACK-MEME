import { useState, useEffect } from 'react';
import './Main.scss';
import { RiDoubleQuotesL } from 'react-icons/ri';
import { AiOutlineTwitter } from 'react-icons/ai';
import { GrTumblr } from 'react-icons/gr';
import axios from 'axios';

const Main = () => {
  const [memes, setMemes] = useState([]);
  const [meme, setMeme] = useState([]);
  const [color, setColor] = useState('');

  const randomColor = () => {
    const randomNumber1 = Math.floor(Math.random() * 255);
    const randomNumber2 = Math.floor(Math.random() * 255);
    const randomNumber3 = Math.floor(Math.random() * 255);
    const randomColor = `rgb(${randomNumber1},${randomNumber2},${randomNumber3})`;
    return randomColor;
  };

  const randomIndexGenerator = () => {
    const randomNumber = Math.floor(Math.random() * memes.length);
    return randomNumber;
  };

  const generateMeme = () => {
    const index = randomIndexGenerator();
    setMeme(memes[index]);
    setColor(randomColor);
  };
  useEffect(() => {
    axios.get('http://localhost:8001/api/v1/meme').then((response) => {
      setMemes(response.data);
    });
  });
  return (
    <div className='main' style={{ backgroundColor: color }}>
      <div className='container'>
        <h1 style={{ color: color }}>
          <RiDoubleQuotesL />{' '}
          {meme.meme ||
            'Le lacrime sono lo sciogliersi del ghiaccio dell"anima. E a chi piange, tutti gli angeli sono vicini.'}
        </h1>
        <div className='author'>
          <span style={{ color: color }}>
            - {meme.author || 'Herman Hesse'}
          </span>
        </div>
        <div className='bottom'>
          <div className='left'>
            <div className='icon-container' style={{ backgroundColor: color }}>
              <AiOutlineTwitter
                style={{ color: 'white', fontSize: '20px' }}
                className='icon'
              />
            </div>
            <div className='icon-container' style={{ backgroundColor: color }}>
              <GrTumblr
                style={{ color: 'white', fontSize: '18px' }}
                className='icon'
              />
            </div>
          </div>
          <button
            type='button'
            onClick={generateMeme}
            style={{ backgroundColor: color }}
          >
            NEW QUOTE
          </button>
        </div>
      </div>
      <span className='copyright'>by Federico Franciosi</span>
    </div>
  );
};

export default Main;
