import React from 'react';

const Wizard = ({total}) => {

  const showMessage = (e) => {
    e.preventDefault();
    document.querySelector('#dialog-rounded').showModal();
  }

  return (
    <div className="layer layer10">
      <div className="wizard">
        <img src={process.env.PUBLIC_URL + '/images/developer.png'} onClick={showMessage} />
      </div>
      <div className="counter-wrapper">
        <div className="counter">
          <a href="#" className="nes-badge is-splited">
            <span className="is-dark">Total:</span>
            <span className="is-primary">{total}</span>
          </a>
        </div>
      </div>
      <section className="wizard-dialog">
        <dialog className="nes-dialog is-rounded" id="dialog-rounded">
          <form method="dialog">
            <p className="title">Hi Huger!</p>
            <p>Choose wisely if you want to get the treasure!</p>
            <menu className="dialog-menu">
              <button className="nes-btn is-primary">Confirm</button>
            </menu>
          </form>
        </dialog>
        </section>
    </div>
  );
} 
 
export default Wizard;


