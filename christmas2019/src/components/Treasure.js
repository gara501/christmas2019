import React, { useState, useEffect } from 'react';

const Treasure = () => {
  
  const [option, updateOption] = useState(1);
  const [invalid, updateInvalid] = useState({
    t1: '',
    t2: '',
    t3: ''
  });
  
  useEffect(() => {
    getCorrectOption();
  }, [option])

  const getCorrectOption = () => {
    const rand = Math.floor(Math.random() * 3) + 1;
    updateOption(rand);
  }

  const selectTreasure = (e) => {
    const getId = parseInt(e.target.id.split('t')[1]);
    const parent = document.querySelector('.paralax-bg');
    if (getId === option) {
      // ACA VA LO DE ABRIR CON EL EFECTO Y OTRAS COSAS QUE VOY A METER
      parent.classList.add('selected');
      updateInvalid({t1:'', t2:'', t3: ''})
    } else {
      parent.classList.remove('selected');
      if (getId === 1) {
        updateInvalid({t1:'invalid', t2:'', t3: ''})
      } else if (getId === 2) {
        updateInvalid({t1:'', t2:'invalid', t3: ''})
      } else {
        updateInvalid({t1:'', t2:'', t3: 'invalid'})
      }
    }
  }

  return (
    <div className="treasures layer layer9">
      <img id="t1" className={invalid.t1} onClick={selectTreasure} src={process.env.PUBLIC_URL + '/images/treasure.png'} />
      <img id="t2" className={invalid.t2} onClick={selectTreasure} src={process.env.PUBLIC_URL + '/images/treasure.png'} />
      <img id="t3" className={invalid.t3} onClick={selectTreasure} src={process.env.PUBLIC_URL + '/images/treasure.png'} />
    </div>
  );
}
 
export default Treasure;


