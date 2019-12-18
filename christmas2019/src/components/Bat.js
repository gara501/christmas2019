import React, {useState} from 'react';

const Bat = () => {

  const [animation, updateAnimation] = useState('idle');
  const changeAnimation = () => {
    updateAnimation('dead');
  }

  return (
    <div className="layer">
      <div className="bat idle">
        <div className={`bat-data ${animation}`} onClick={changeAnimation}></div>
      </div>
    </div>
  );
} 
 
export default Bat;


