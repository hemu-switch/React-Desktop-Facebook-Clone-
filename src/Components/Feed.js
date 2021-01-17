import React, { useState, useEffect } from 'react';
import StoryReel from './StoryReel';
import MessegeSender from './MessageSender';
import Posts from './Posts';
import db from '../firebase';
import './feed.css';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot =>
        setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
      );
  }, []);

  return (
    <div className='feed'>
      <StoryReel />
      <MessegeSender />

      {posts.map(post => (
        <Posts
          key={post.id}
          profilePic={post.data.profilePic}
          username={post.data.username}
          message={post.data.message}
          image={post.data.image}
          timestamp={post.data.timestamp}
        />
      ))}

      <Posts
        profilePic='https://lh3.googleusercontent.com/ogw/ADGmqu87HjXeJgcv2ixsUZqa0O9htPkhRhNKrRcRvrGdZg=s32-c-mo'
        username='Hemraj j'
        message='My First Post'
        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJeEgEYT-WCUKU03Is3Wj-DpeXftAvnra5A&usqp=CAU'
        timestamp='This is timestamp'
      />
    </div>
  );
}

export default Feed;
