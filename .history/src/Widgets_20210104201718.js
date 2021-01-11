import React from 'react';
import './Widgets.css';

import InfoIcon from '@material-ui/icons/Info';

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleleft"></div>
      
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
    </div>
  );
}

export default Widgets;
