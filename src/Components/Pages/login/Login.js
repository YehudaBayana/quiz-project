import React, { useContext } from 'react';
import './login.css';
import { StoreContext } from '../../customHooks/ContextProvider';

const Login = ({ setPass, setEmail, loginForm }) => {
  return (
    <>
      <form onSubmit={loginForm} className='login'>
        <div className='login-screen'>
          <div className='app-title'>
            <h1>Login</h1>
          </div>

          <div className='login-form'>
            <div className='control-group'>
              <input
                type='email'
                className='login-field'
                onChange={(e) => setEmail(e.target.value)}
                placeholder='email'
                id='login-name'
              />
              <label
                className='login-field-icon fui-user'
                htmlFor='login-name'
              ></label>
            </div>

            <div className='control-group'>
              <input
                type='password'
                className='login-field'
                onChange={(e) => setPass(e.target.value)}
                placeholder='password'
                id='login-pass'
              />
              <label
                className='login-field-icon fui-lock'
                htmlFor='login-pass'
              ></label>
            </div>

            <button className='btn btn-primary btn-large btn-block'>
              login
            </button>
            <a className='login-link' href='#'>
              Lost your password?
            </a>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
