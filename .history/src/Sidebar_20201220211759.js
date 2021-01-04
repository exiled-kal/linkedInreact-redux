import {Avatar} from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="" alt="" />
        <Avatar />
        <h2>Tsering Kalden</h2>
        <h4>tsering.kalden</h4>
      </div>
      <div className="sidebar__bottom"></div>
    </div>
  );
}

export default Sidebar;
