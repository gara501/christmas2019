import React from 'react';
import Monster from './Monster';
import Floor from './Floor';

const Messages = ({messages, selectFrame}) =>  {
  
  const returnToInit = () => {
    const parent = document.querySelector('.paralax-bg');
    parent.classList.remove('selected');
    parent.classList.add('selected');
    selectFrame('frame1')
  }

  return (
    <div className="messages">
      <div className="paralax-bg">
        <img className="layer layer1" src={process.env.PUBLIC_URL + '/images/1.png'} />
        <img className="layer layer2" src={process.env.PUBLIC_URL + '/images/2.png'} />
        <img className="layer layer3" src={process.env.PUBLIC_URL + '/images/3.png'} />
        <img className="layer layer4" src={process.env.PUBLIC_URL + '/images/4.png'} />
        <img className="layer layer5" src={process.env.PUBLIC_URL + '/images/5.png'} />
        <img className="layer layer6" src={process.env.PUBLIC_URL + '/images/6.png'} />
        <h3 className="layer layer7 extruded-text">WISHES</h3>
      </div>
      <div className="portal" onClick={returnToInit}></div>
      <div className="messages-grid layer layer8">
        {messages.map((message) => (
          <div className="gem-container">
            <img key={message.purpose} className="note" src={process.env.PUBLIC_URL + '/images/note.png'} />
          </div>
        ))}
      </div>
      <Monster />
      <Floor />
    </div>
  );
}
 
export default Messages;
