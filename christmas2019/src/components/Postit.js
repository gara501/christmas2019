import React from 'react';
const Postit = ({message, position}) => {
  
  const randomColorNumber = () => {
    return Math.round(Math.random() * (255 - 0) + 0);
  }

  const randomPosition = (vector) => {
    const xVal = Math.round(Math.random() * (position.x2 - position.x1) + position.x1);
    const yVal = Math.round(Math.random() * (position.y2 - position.y1) + position.y1);
    if (vector === 'x'){
      return `${xVal}px`;
    } else {
      return `${yVal}px`;
    }
  }

  const getColor = () => {
    const r = randomColorNumber();
    const g = randomColorNumber();
    const b = randomColorNumber();
    return `rgb(${r},${g},${b})`;
  }

  const randomColor = getColor();
  const itemPositionX = randomPosition('x');
  const itemPositionY = randomPosition('y');
  console.log(itemPositionX);
  console.log(itemPositionY);


  const styles = {
    container: {
        fontSize: '12px',
        background: randomColor,
        top: itemPositionY,
        left: itemPositionX

    }
  };

  return (
    <p className="postit" style={styles.container}>{message}</p>
  )
};
 
export default Postit;