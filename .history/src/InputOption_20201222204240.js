import React from 'react';
import './InputOption.css';

function InputOption({title, Icon, color}) {
  return (
    <div className="inputOption">
      <Icon style={{color: color}} />
    </div>
  );
}

export default InputOption;
