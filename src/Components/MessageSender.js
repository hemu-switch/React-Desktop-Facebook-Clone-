import React, { useState } from 'react';
import './MessageSender.css';
import { Avatar } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmotionIcon from '@material-ui/icons/InsertEmoticon';

function MessageSender() {
  const [input, setInput] = useState('');
  const [imgURL, setImageURL] = useState('');
  const handleClick = e => {
    e.preventDefault();

    //Some db

    setInput('');
    setImageURL('');
  };
  return (
    <div className='messageSender'>
      <div className='messageSender_top'>
        <Avatar />
        <form>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            className='messageSender_input'
            placeholder={`Whats on your mind `}
          />
          <input
            value={imgURL}
            onChange={e => setImageURL(e.target.value)}
            placeholder={`Image URL (Optional)`}
          />
          <button className='' onClick={handleClick}>
            Hidden Submit
          </button>
        </form>
      </div>

      <div className='messageSender_bottom'>
        <div className='messageSender_option'>
          <VideocamIcon style={{ color: 'red' }} />
          <h3>Live Video</h3>
        </div>
        <div className='messageSender_option'>
          <PhotoLibraryIcon style={{ color: 'green' }} />
          <h3>Photo/Video</h3>
        </div>
        <div className='messageSender_option'>
          <InsertEmotionIcon style={{ color: 'orange' }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
