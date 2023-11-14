import { useState } from 'react';
import './styles.css';

export const ControlledRegistrationForm = () => {

  return (
    <>
    <h2>Controlled Registration Form</h2>
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="name-input">
        Name:
      </label>
      <input
        id="name-input"
        type="text"
      />


      <label htmlFor="email-input">
        Email:
      </label>
      <input
        id="email-input"
        type="email"
      />

      <label htmlFor="address-input">
        Address:
      </label>
        <textarea
          id="address-input"

        />

      <label htmlFor="phone-input">
        Phone Number:
      </label>
      <input
        id="phone-input"
        type="tel"
      />

      <div>
        <label htmlFor="subscribe-checkbox">
          Subscribe to Newsletter:
        </label>
        <input
          id="subscribe-checkbox"
          type="checkbox"
        />
      </div>
      
      <button type="submit">Submit</button>
    </form>
    </>
  );
}
