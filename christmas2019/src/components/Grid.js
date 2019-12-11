import React  from 'react';
import DrawerBox from './DrawerBox';

const Grid = ({wishes}) => {
  return (
    <div className="grid">
      <div className="grid-header"></div>
      <div className="wrapper">
        { wishes.map( drawerBox => (
          <DrawerBox key={drawerBox.id} drawerBox={drawerBox} />
        ))}
      </div>
  </div>
  )
};
 
export default Grid;
