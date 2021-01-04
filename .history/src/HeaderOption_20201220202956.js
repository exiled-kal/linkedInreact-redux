import React from 'react';
import './HeaderOption.css';

function HeaderOption({title, Icon}) {
  return <div className="headerOption">
  {Icon && <Icon className="headerOption"/>}
  </div>;
}

export default HeaderOption;
