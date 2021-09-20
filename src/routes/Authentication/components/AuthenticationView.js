import React, { useState } from 'react'
import LoginForm from 'components/LoginForm'
import RegisterForm from 'components/RegisterForm'
import {
  doRegister,
  doLogin,
} from '../modules/actions'
const AuthenticationView = ({doLogin,doRegister}) => {
  const [currentForm, setCurrentForm] = useState({
    form: "login",
    headline: "Hello There",
    descreption: "<span> Don't have a account? <br />Sign up with us today!</span>",
    title: "Sign In",
    isRunAnimation: false
  });
  const [login, setLogin] = useState(false)
  const onclickSetForm = (form) => {
    setCurrentForm({
      headline: (form == 'login') ? 'Hello There' : 'Let get you started',
      descreption: (form == 'login') ? "<span> Don't have a account? <br />Sign up with us today!</span>" : "<span>Be part of our awesome <br/> team and have fun with us</span>",
      form: form,
      isRunAnimation: true,
    });
  };
  const callbackResponse = (value) => {
    setLogin(value)
  }
  return (
    <>
      <div className="authen-form">
        <div className={`container ${login ? 'form__success' : ''}`}>
          <div className="form__success"></div>
          <div className={`account__container ${currentForm.form == 'login' ? 'login-form' : 'register-form'} 
        ${currentForm.form == 'login' && currentForm.isRunAnimation ? 'login-form-animated' : ''}`}>
            <div className="signin__form">
              <h4 className="signin__form--headline">{currentForm.title}</h4>
              {
                currentForm.form == 'login' ? (
                  <LoginForm callbackLogin={doLogin}/>
                ) : (
                  <RegisterForm parentCallback={callbackResponse} callbackRegister={doRegister}/>
                )
              }

              <div className="signin__form--note">
                {
                  currentForm.form == 'login' ? (
                    <button className="link link--underline" onClick={() => onclickSetForm('register')}>Create account</button>
                  ) : (
                    <button className="link link--underline" onClick={() => onclickSetForm('login')}>Already have an account</button>
                  )
                }
              </div>
            </div>
            <div className="note__form">
              <div className="note__content">
                <h2 className="note__content--headline">{currentForm.headline}</h2>
                <p className="note__content--descreption" dangerouslySetInnerHTML={{ __html: currentForm.descreption }}></p>
              </div>
            </div>
            {
              login &&
              <div className="text-center">
                <a href="#" className="btn btn--round btn--orange" onClick={e => {
                  e.preventDefault()
                  setLogin(false)
                }}>Logout</a>
              </div>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthenticationView;
