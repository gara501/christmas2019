import React from 'react';
import Envelope from './Envelope';

const Envelopes = ({messages}) => {
  console.log('MESSAGES',  messages);
  return (
    <div className="envelopes">
       { messages.map( message => (
          <Envelope key={message.message} message={message} />
        ))}
    </div>
  )
};
 
export default Envelopes;