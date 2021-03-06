import { Avatar } from '@material-ui/core';
import React from 'react';
import './HeaderOption.css';

function HeaderOption({avatar, title, Icon, onClick}) {
  return (
    <div onCLick className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar className="headerOption__icon" src={avatar} />}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
