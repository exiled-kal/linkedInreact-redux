import React from 'react';
import './Feed.css';

import CreateIcon from '@mat'

function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
        </div>
      </div>
    </div>
  );
}

export default Feed;
