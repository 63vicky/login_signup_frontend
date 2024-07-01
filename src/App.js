import React, { useState } from 'react';
import './App.css';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

export default function App() {
  const [type, setType] = useState('signIn');
  const handleOnClick = (text) => {
    if (text !== type) {
      setType(text);
      return;
    }
  };
  const containerClass =
    'container ' + (type === 'signUp' ? 'right-panel-active' : '');
  return (
    <div className="App">
      <h2>Login</h2>
      <div className={containerClass} id="container">
        <div
          className="absolute top-1/2 text-slate-800 left-1/2 -translate-x-1/2 z-[999]"
          style={{ transform: 'translateX(-50%)' }}
        >
          <span
            className={
              type === 'signUp' ? 'text-xl text-white' : 'text-xl font-semibold'
            }
          >
            O
          </span>
          <span
            className={
              type === 'signUp' ? 'text-xl font-semibold' : 'text-xl text-white'
            }
          >
            R
          </span>
        </div>
        <SignUp />
        <SignIn />
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => handleOnClick('signIn')}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost "
                id="signUp"
                onClick={() => handleOnClick('signUp')}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
