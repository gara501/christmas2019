import React from 'react';

const Monster = ({total}) => {

  const showMessage = (e) => {
    e.preventDefault();
    document.querySelector('#dialog-rounded2').showModal();
  }

  return (
    <div>
      <div className="monster">
        <img src={process.env.PUBLIC_URL + '/images/developer.png'} onClick={showMessage} />
      </div>
      <div className="counter-wrapper2">
        <div className="counter">
          <a href="#" className="nes-badge is-splited">
            <span className="is-dark">Total:</span>
            <span className="is-primary">{total}</span>
          </a>
        </div>
      </div>
      <section className="wizard-dialog">
        <dialog className="nes-dialog is-rounded" id="dialog-rounded2">
          <form method="dialog">
            <p className="title">Hi Huger!</p>
            <p>Select one of these notes to see a great message!</p>
            <menu className="dialog-menu">
              <button className="nes-btn is-primary">Confirm</button>
            </menu>
          </form>
        </dialog>
      </section>
    </div>
  );
} 
 
export default Monster;


