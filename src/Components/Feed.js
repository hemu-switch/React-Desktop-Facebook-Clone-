import React from 'react';
import StoryReel from './StoryReel';
import MessegeSender from './MessageSender';
import './feed.css';

function Feed() {
  return (
    <div className='feed'>
      <StoryReel />
      <MessegeSender />
      {/* Post */}
    </div>
  );
}

export default Feed;
