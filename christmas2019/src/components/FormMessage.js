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
    <div className="form-wrapper">
      <div className="form-init" onClick={expandForm} >
        <a href=""><h4>Send Message</h4></a>
      </div>
      <div className={`form-container ${formvisible ? "form-open" : ""}`}>
        <i className="material-icons icon-close" onClick={closeForm}>
          close
        </i>
        <form
        onSubmit={sendData}>
          <div className="form-input">
            <input 
                type="text" 
                name="name"
                value={formData.name}
                placeholder="Your Name"
                onChange={handleChange}
            />
          </div>
          <div className="form-input">
            <select 
              onChange={handleChange}  
              name="office"
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
            <input 
                type="text" 
                name="message"
                placeholder="Your Message"
                onChange={handleChange}
                value={formData.message}
            />
          </div>
          {(error) ? <Error message="Todos los campos son obligatorios" />: null}
          <input type="submit" value="Send" />
        
        </form>
      </div>
    </div>
  );
}
 
export default FormMessage;
