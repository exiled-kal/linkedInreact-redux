import {Avatar} from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

function Sidebar() {

  const recentItem = (topic) => {}
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="https://i.stack.imgur.com/FNNGP.gif" alt="" />
        <Avatar className="sidebar__avatar" />
        <h2>Tsering Kalden</h2>
        <h4>tsering.kalden@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,3435</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,1235</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
      </div>
    </div>
  );
}

export default Sidebar;
