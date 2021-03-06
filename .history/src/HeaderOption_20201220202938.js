import React from 'react';
import './HeaderOption.css';

function HeaderOption({title, Icon}) {
  return <div className="headerOption">
  {Icon && <Icon className='/>}
  </div>;
}

export default HeaderOption;
