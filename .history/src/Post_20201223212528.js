import {Avatar} from '@material-ui/core';
import React from 'react';
import InputOption from './InputOption';
import './Post.css';

import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';

function Post({name, description, message, photoUrl}) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>Message goes here</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
      </div>
    </div>
  );
}

export default Post;
