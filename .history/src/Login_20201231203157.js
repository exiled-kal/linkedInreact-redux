import React from 'react';
import './Login.css';

function Login() {
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
        <input placeholder="Etype="text" />
      </form>
    </div>
  );
}

export default Login;
