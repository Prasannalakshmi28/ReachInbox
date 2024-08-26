import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';
import { authenticateUser } from '../services/auth';
import './login.css';

const LoginPage = () => {
  const history = useHistory();

  const handleLoginSuccess = async (response) => {
    const result = await authenticateUser(response.tokenId);
    if (result.success) {
      history.push('/onebox');
    }
  };

  const handleLoginFailure = (response) => {
    console.error('Google Login Failed:', response);
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Login with Google"
        onSuccess={handleLoginSuccess}
        onFailure={handleLoginFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default LoginPage;
