import React from 'react';
import './Feed.css';

import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';

import InputOption from './InputOption';

function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#70B5F9" />
          <InputOption Icon={CalendarViewDayIcon} title="Write articele" color="#70B5F9" />
        </div>
      </div>
    </div>
  );
}

export default Feed;
