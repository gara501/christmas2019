import React, { useState } from "react";

const DrawerBox = ({ drawerBox, setIsShowingMessages, row, col, isLast }) => {
  const [isActive, setIsActive] = useState(false);

  const onClick = () => {
    setIsActive(!isActive);
    setIsShowingMessages(!isActive);
  };

  const activeClass = isActive ? " grid-box-active" : "";
  const style = isLast
    ? {
        top: "75%",
        left: 0,
        width: "100%"
      }
    : {
        top: `${(row % 4) * 25}%`,
        left: `${(col % 4) * 25}%`
      };

  return (
    <div
      className={"grid-box drawer-box cube " + drawerBox.id + activeClass}
      style={style}
      onClick={onClick}
    >
      <div className="cube-face cube-face-front">
        <div className="drawer-handle"></div>
        <div className="drawer-content">
          <div className="drawer-sticker">
            <h4 className="drawer-title">{drawerBox.office}</h4>
            <span className="drawer-total">{drawerBox.total}</span>
          </div>
        </div>
      </div>
      <div className="cube-face cube-face-back"></div>
      <div className="cube-face cube-face-right"></div>
      <div className="cube-face cube-face-left"></div>
      <div className="cube-face cube-face-top"></div>
      <div className="cube-face cube-face-bottom">
        <div style={{position: 'absolute', width: 50, height: 25, background: 'red', transform: 'rotate(10deg)', left: '10%', top: '10%'}}></div>
        <div style={{position: 'absolute', width: 50, height: 25, background: 'blue', transform: 'rotate(40deg)', left: '38%', top: '47%'}}></div>
        <div style={{position: 'absolute', width: 50, height: 25, background: 'green', transform: 'rotate(70deg)', left: '78%', top: '85%'}}></div>
      </div>
    </div>
  );
};

export default DrawerBox;
