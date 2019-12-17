import React from 'react';

const DrawerBox = ({drawerBox}) => (
  <div className="drawer-box">
    <a href="#" class="nes-badge is-icon">
      <span class="is-dark">{drawerBox.total}</span>
      <span class="is-warning">{drawerBox.office}</span>
    </a>
    <div className="building"></div>
  </div>

    
  
);
 
export default DrawerBox;
