import React, { useState, useEffect } from "react";
import DrawerBox from "./DrawerBox";

const getWishesBoxes = ({ wishes, setIsShowingMessages }) => {
  const wishesBoxes = [];

  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      const flatIndex = col + row * 4;
      let isLast = false;

      console.log(flatIndex);

      if (flatIndex >= wishes.length) {
        break;
      } else if (flatIndex + 1 === wishes.length) {
        isLast = true;
      }

      const drawerBox = wishes[flatIndex];

      wishesBoxes.push(
        <DrawerBox
          key={drawerBox.id}
          drawerBox={drawerBox}
          setIsShowingMessages={setIsShowingMessages}
          row={row}
          col={col}
          isLast={isLast}
        />
      );
    }
  }
  return wishesBoxes;
};

const Grid = ({ wishes }) => {
  console.log(wishes);
  const [isShowingMessages, setIsShowingMessages] = useState(false);
  const [showCubeAnimation, setShowCubeAnimaton] = useState(false);

  let gridClasses = 'grid';

  if (isShowingMessages) {
    gridClasses += ' grid-showing-messages';
  }

  if (showCubeAnimation) {
    gridClasses += ' grid-show-cube-animation';
  }

  useEffect(() => {
    if (isShowingMessages) {
      setTimeout(() => {
        setShowCubeAnimaton(true);
      }, 1200)
    }
  }, [isShowingMessages]);

  return (
    <div className={gridClasses}>
      <div className="grid-header"></div>
      <div className="wrapper">
        {getWishesBoxes({ wishes, setIsShowingMessages })}
      </div>
    </div>
  );
};

export default Grid;
