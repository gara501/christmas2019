import React  from 'react';
import DrawerBox from './DrawerBox';
import Character from './Character';

const Grid = ({wishes}) => {
  return (
    <div className="grid">
      <div className="paralax-bg">
        <img className="layer layer1" src={process.env.PUBLIC_URL + '/images/1.png'} alt="" />
        <img className="layer layer2" src={process.env.PUBLIC_URL + '/images/2.png'} alt="" />
        <img className="layer layer3" src={process.env.PUBLIC_URL + '/images/3.png'} alt="" />
        <img className="layer layer4" src={process.env.PUBLIC_URL + '/images/4.png'} alt="" />
        <img className="layer layer5" src={process.env.PUBLIC_URL + '/images/5.png'} alt="" />
        <img className="layer layer6" src={process.env.PUBLIC_URL + '/images/6.png'} alt="" />
        <Character />
      </div>
      <div className="wrapper">
          { wishes.map( drawerBox => (
            <DrawerBox key={drawerBox.id} drawerBox={drawerBox} />
          ))}
      </div>
  </div>
  )
};
 
export default Grid;
