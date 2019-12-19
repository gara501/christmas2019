import React, {useState} from 'react';
import Monster from './Monster';
import Floor from './Floor';
import Bg from './Bg';

const Messages = ({messages, selectFrame}) =>  {
  console.log('Mensajes', messages);
  const [message, updateMessage] = useState({
    from: '',
    office: '',
    message: ''
  });

  const setMessage = (item) => {
    updateMessage({
      from: item.name,
      office: item.office,
      message: item.purpose
    });
    document.querySelector('#dialog-messages').showModal();
  }

  const returnToInit = () => {
    const parent = document.querySelector('.paralax-bg');
    parent.classList.remove('selected');
    parent.classList.add('selected');
    selectFrame('frame1');
  }

  return (
    <div className="messages">
      <div className="paralax-bg">
        <Bg />
        <h3 className="layer layer7 extruded-text">WISHES</h3>
      </div>
      <section className="message-dialog">
        <dialog className="nes-dialog is-rounded" id="dialog-messages">
          <form method="dialog">
            <p className="title">{message.from}</p>
            <p>{message.message}</p>
            <menu className="dialog-menu">
              <button className="nes-btn is-primary">Confirm</button>
            </menu>
          </form>
        </dialog>
      </section>
      <div className="portal" onClick={returnToInit}></div>
      <div className="messages-grid layer layer8">
        {messages.map((message) => (
          <div key={message.purpose}  className="gem-container">
            <img className="note" onClick={()=> setMessage(message)} src={process.env.PUBLIC_URL + '/images/note.png'} />
          </div>
        ))}
      </div>
      <Monster total={messages.length} />
      <Floor />
    </div>
  );
}
 
export default Messages;
