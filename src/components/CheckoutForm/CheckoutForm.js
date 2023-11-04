import React, { useState } from 'react';

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [emailRep, setEmailRep] = useState('');

  const handleConfirm = (event) => {
    event.preventDefault();
    const userData = {
      name,
      phone,
      email,
    }
    if (email !== emailRep) {
      alert('Los correos no coinciden');
      return;
    }
    
    onConfirm(userData);
  };

  return (
    <div className="container">
      <form onSubmit={handleConfirm} className="box">
        <div className="field">
          <label className="label">
            Nombre:
            <input
              className="input"
              type="text"
              placeholder="Nombre y apellido"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
          </label>
        </div>
        <div className="field">
          <label className="label">
            Teléfono:
            <input
              className="input"
              type="text"
              placeholder="(999) 999-9999"
              value={phone}
              onChange={({ target }) => setPhone(target.value)}
            />
          </label>
        </div>
        <div className="field">
          <label className="label">
            Email:
            <input
              className="input"
              type="text"
              placeholder="example@gmail.com"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </label>
        </div>
        <div className="field">
          <label className="label">
            Repeat email:
            <input
              className="input"
              type="text"
              placeholder="example@gmail.com"
              value={emailRep}
              onChange={({ target }) => setEmailRep(target.value)}
            />
          </label>
        </div>
        <div className="field">
          <button type="submit" className="button is-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
