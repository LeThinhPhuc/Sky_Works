import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import userAdminService from '../../../services/userAdminService';
import { AuthContext } from '../../../Context/AuthContext';
import axiosInstance from '../../../services/axiosInstance';

const LoginRegisterPage = () => {
  const { dispatch } = useContext(AuthContext);
  const [loginError, setLoginError] = useState(null);
  const [showLogin, setShowLogin] = useState(true);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleRegisterClick = () => {
    setShowLogin(false);
  };

  const onLoginSubmit = async (values) => {

    try {
      const loginResponse = await userAdminService.loginAdmin(values)
      console.log("Login Success API", loginResponse);
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${loginResponse.data.accessToken}`
      dispatch({
        type: 'LOGIN',
        payload: loginResponse?.data,
      });

      navigate("/admin");
      
    } catch (error) {
      setLoginError(error?.response.data.message);
      setTimeout(() => {
        setLoginError('');
      }, 3000)
    }
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-r to-[#00c6fb] from-[#005bea] flex place-content-center place-items-center">  {/* PAGE-BACKGROUND */}

      <div className="max-w-sm min-h-[400px] w-3/5 h-3/5 text-gray-800 bg-white rounded-lg flex flex-col justify-between
      place-items-center pb-6"> {/* FORM-CONTAINER */}
        
        <div className="flex flex-row w-full"> {/* FORM-SWITCHER */}
          <button /* LOGIN-BUTTON */
            className={showLogin ? 'active w-1/2 h-10 bg-white text-sky-500 border-b border-b-sky-500 font-semibold rounded-tl-lg' : 'w-1/2 bg-sky-400 text-white h-10 font-light rounded-tl-lg'}
            onClick={handleLoginClick}
          >
            LOGIN
          </button>
          <button /* REGISTER-BUTTON */
            className={!showLogin ? 'active w-1/2 h-10 bg-white text-sky-500 border-b border-b-sky-500 font-semibold rounded-tr-lg' : 'w-1/2 bg-sky-400 text-white h-10 font-light rounded-tr-lg'}
            onClick={handleRegisterClick}
          >
            REGISTER
          </button>
        </div>
        {loginError && <div className="error-message">{loginError}</div>}
        {showLogin ? (
          <LoginForm onSubmit={onLoginSubmit} />
        ) : (
          <RegisterForm/>
        )}

        <div className="flex place-content-center place-items-center">
          {showLogin ? (
            <div>
              Don't have an account?{' '}
              <button className="text-sky-500 hover:underline" onClick={handleRegisterClick}>Register</button>
            </div>
          ) : (
            <div>
              Already have an account?{' '}
              <button className="text-sky-500 hover:underline" onClick={handleLoginClick}>Log in</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterPage;