import React from 'react';
import './storyReel.css';
import Story from './Story';

function StoryReel() {
  return (
    <div className='storyReel'>
      <Story
        image='https://picsum.photos/seed/picsum/200/300'
        profileSrc='https://lh3.googleusercontent.com/a-/AOh14Gi7AD6dIsrr2UUTmp4-dKDp-5S45xk-qw511XrxTw=s88-c-k-c0x00ffffff-no-rj-mo'
        title='Hemraj J.'
      />

      <Story
        image='https://picsum.photos/id/237/200/300'
        profileSrc='https://i.pravatar.cc/150?img=59'
        title='Alex Hales'
      />

      <Story
        image='https://randomuser.me/api/portraits/women/9.jpg'
        profileSrc='https://i.pravatar.cc/150?img=1'
        title='Ellyse Perry'
      />
      <Story
        image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHMqp1EXBtalpMCV1gkDE9cFnaFSVEJqeHuA&usqp=CAU'
        profileSrc='https://i.pravatar.cc/150?img=56'
        title='jhon Doe'
      />
      <Story
        image='https://picsum.photos/200/300?grayscale'
        profileSrc='https://i.pravatar.cc/150?img=5'
        title='Dany wyyat'
      />
      {/* story */}
      {/* story */}
      {/* story */}
      {/* story */}
      {/* story */}
      {/* story */}
    </div>
  );
}

export default StoryReel;
