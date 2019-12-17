import React, { useState } from 'react';
import Error from './Error';

const FormMessage = ({offices, writeData}) => {
  
  const [formData, updateFormData] = useState({
    name: '',
    office: '',
    message: ''
  });

  const [error, saveError] = useState(false);
  const [formvisible, updateFormVisible] = useState(false);

  const handleChange = e => {
    updateFormData({
      ...formData, 
      [e.target.name]: e.target.value
    });
    console.log(formData);
  };

  const validateForm = () => {
    console.log(formData);
    if (formData.name === '' 
    || formData.message === ''
    || formData.office === ''
    ) {
      saveError(true);
      return;
    } 
    saveError(false);
  }

  const sendData = e => {
    e.preventDefault();
    if (formData.name === '' 
    || formData.message === ''
    || formData.office === ''
    ) {
      saveError(true);
      return;
    } 
    saveError(false);
    writeData(formData);
    updateFormData({
      name: '',
      office: '',
      message: ''
    });
  }

  const expandForm = (e) => {
    e.preventDefault();
    updateFormVisible(true);
  }

  const closeForm = (e) => {
    e.preventDefault();
    updateFormVisible(false);
  }

  return (
    <div className="form-wrapper ">
      <div className="form-init">
        <button type="button" onClick={expandForm} className="nes-btn is-primary">Send Message</button>
      </div>
      <div className={`form-container nes-container is-rounded ${formvisible ? "form-open" : ""}`}>
        <i className="material-icons icon-close" onClick={closeForm}>
          close
        </i>
        <form
        onSubmit={sendData}>
          <div className="form-input">
            <input 
                type="text" 
                name="name"
                className="nes-input"
                value={formData.name}
                placeholder="Your Name"
                onChange={handleChange}
            />
          </div>
          <div className="nes-select form-input">
            <select 
              onChange={handleChange}  
              name="office"
              clas
              value={formData.office}>
              <option>Select Office:</option>
              {
                offices.map((office) => (
                  <option key={office.id} value={office.office}>{office.office}</option>
                ))
              }
            </select>
          </div>
          <div className="form-input">
            <textarea
              name="message"
              placeholder="Your Message"
              onChange={handleChange}
              value={formData.message}
              rows="5"
              cols="23"
              className="nes-textarea"
            >

            </textarea>
          </div>
          {(error) ? <Error message="All fields are mandatory!" />: null}
          <input className="nes-btn is-primary" type="submit" value="Send" />
        
        </form>
      </div>
    </div>
  );
}
 
export default FormMessage;
