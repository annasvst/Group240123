import { useState } from 'react';

export const LoginForm = () => {

  return (
    <>
      <h2>Login Form (Controlled)</h2>
      <form onSubmit={handleSubmit} className='form'>
      <label htmlFor="username">
        Username:
      </label>
        <input
          id="username"
          type="text"
        />
      
      <label htmlFor="password">
        Password:
      </label>
        <input
          id="password"
          type="password"
        />
      
      <button type="submit">Submit</button>
    </form>
    </>
  );
};