import React from 'react';
import Postit from './Postit';
import useDimensions from 'react-use-dimensions';

const Wall = ({messages}) => {
  const [ref, { x, y, height, width }] = useDimensions();

  const getPosition = ()=> {
    const x1 = x;
    const x2 = x  + width;
    const y1 = y;
    const y2 = y + height;
    return {x1, x2, y1, y2};
  }

  const position = getPosition();

  return (
    <div ref={ref} className="wall">
    { messages.map( message => (
      <Postit key={message.id} position={position}  message={message.purpose} />
    ))}
  </div>
  );
}
 
export default Wall;