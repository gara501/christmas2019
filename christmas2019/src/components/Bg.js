import React, {Fragment} from 'react';

const Bg = () => (
    <Fragment>
      <img className="layer layer1" src={process.env.PUBLIC_URL + '/images/1.png'} alt=""/>
      <img className="layer layer2" src={process.env.PUBLIC_URL + '/images/2.png'} alt="" />
      <img className="layer layer3" src={process.env.PUBLIC_URL + '/images/3.png'} alt="" />
      <img className="layer layer4" src={process.env.PUBLIC_URL + '/images/4.png'} alt="" />
      <img className="layer layer5" src={process.env.PUBLIC_URL + '/images/5.png'} alt="" />
      <img className="layer layer6" src={process.env.PUBLIC_URL + '/images/6.png'} alt="" />
    </Fragment>
  );
 
export default Bg;


