import React from 'react';

const Envelope = ({message}) => {
  return (
    <div className="envelope-wrapper">
      <div className="envelope">
        <span>1</span>
      </div>
      <div className="envelope-ghost">
        <div className="envelope-top"></div>        
      </div>
    </div>
  )
};
 
export default Envelope;