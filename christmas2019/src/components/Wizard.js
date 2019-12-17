import React from 'react';

const Wizard = () => {

  const showMessage = (e) => {
    e.preventDefault();
    console.log('MAGO', e);
    document.getElementById('dialog-rounded').showModal();
  }

  return (
    <div className="wizard layer layer10">
      <div className="wizard-man">
        <img src={process.env.PUBLIC_URL + '/images/w1.png'}  onClick={showMessage} />
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


