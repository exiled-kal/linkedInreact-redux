import React from 'react';
import './InputOption.css';

function InputOption({title, Icon, color}) {
  return (
    <div className="inputOption">
      <Icon />
    </div>
  );
}

export default InputOption;
