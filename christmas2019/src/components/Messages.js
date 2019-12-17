import React from 'react';
import Wizard from './Wizard';

const Messages = ({messages}) =>  {
  console.log(messages);

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
      <div className="messages-grid layer layer8">
        {messages.map((message) => (
          <i key={message.purpose} className="nes-icon is-large star"></i>
        
        ))}
      </div>
      <Wizard frame="2" />
    </div>
  );
}
 
export default Messages;
