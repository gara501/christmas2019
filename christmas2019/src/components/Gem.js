import React from 'react';

const Gem = ({message}) => {
  
  return (
    <div className="wizard layer layer10">
      <div className="gem"></div>
      <img src={process.env.PUBLIC_URL + '/images/note.png'} alt="" />
    </div>
  );
} 
 
export default Gem;


