import React, {useState} from 'react';

const Treasure = () => {
  const [selectedTreasure, setSelectedTreasure] = useState(false);
  
  const onSelectTreasure = () => {
    const parent = document.querySelector('.paralax-bg');
    parent.classList.add('selected');
  }

  return (
  <div className="treasures layer layer9">
    <img src={process.env.PUBLIC_URL + '/images/treasure.png'} onClick={onSelectTreasure}/>
    <img src={process.env.PUBLIC_URL + '/images/treasure.png'} />
    <img src={process.env.PUBLIC_URL + '/images/treasure.png'} />
  </div>
)};
 
export default Treasure;


