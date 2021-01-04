import React, {useState} from 'react';
import {auth} from './firebase';

import './Login.css';

function Login() {
  const [email, setEmail] = useState('');

  

  const loginToApp = (e) => {
    e.preventDefault();
  };

  const register = () => {};

  return (
    <div className="login">
      <img
        src="https://www.algonquincollege.com/coop/files/2016/08/linkedin-logo.jpg"
        alt=""
      />
      <form action="">
        <input
          placeholder="Full name(required if not registered)"
          type="text"
        />
        <input placeholder="Profile pic URL (optional)" type="text" />
        <input placeholder="Email" type="email" />
        <input placeholder="Password" type="password" />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member ?{' '}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
