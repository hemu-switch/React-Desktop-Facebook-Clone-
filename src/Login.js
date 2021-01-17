import React from 'react';
import Button from '@material-ui/core/Button';
import './Login.css';
import { provider, auth } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
  const [state, dispatch] = useStateValue();

  const SignIn = () => {
    auth
      .signInWithPopup(provider)
      .then(result => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user
        });
        console.log(result);
      })
      .catch(err => alert(err.message));
  };

  return (
    <div className='login'>
      <div className='login_logo'>
        <img
          src='https://download.logo.wine/logo/Facebook/Facebook-f_Logo-Blue-Logo.wine.png'
          alt='Facebook'
        />
        <img
          src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg'
          alt='Facebook'
        />
      </div>

      <Button type='submit' onClick={SignIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
