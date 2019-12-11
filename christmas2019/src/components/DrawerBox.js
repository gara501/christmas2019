import React from 'react';

const DrawerBox = ({drawerBox}) => (
  <div className={'grid-box drawer-box ' + drawerBox.id }>
    <div className="drawer-handle">

    </div>
    <div className="drawer-content">
      <div className="drawer-sticker">
        <h4 className="drawer-title">{drawerBox.name}</h4>
        <span className="drawer-total">{drawerBox.total}</span>
      </div>
    </div>
  </div>
);
 
export default DrawerBox;
