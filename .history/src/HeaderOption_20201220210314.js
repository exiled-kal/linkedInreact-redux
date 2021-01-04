import React from 'react';
import './HeaderOption.css';

function HeaderOption({avatar, title, Icon}) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
          <Avatar className="headerO"
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
