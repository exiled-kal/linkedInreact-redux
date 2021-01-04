import React from 'react';
import './HeaderOption.css';

function HeaderOption({title, Icon}) {
  return (
    <div className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      <h3 className="headerOption">{title}</h3>

    </div>
  );
}

export default HeaderOption;
