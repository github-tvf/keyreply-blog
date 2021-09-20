import React, { useState } from 'react'
const HomeView = ({callbackLogin  }) => {
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const onSubmitForm = () => {
    callbackLogin(loginEmail,loginPassword)
  }
  return (
    <>
      <form onSubmit={e => {
        e.preventDefault()
        onSubmitForm()
      }} id="loginForm">
        <div className="signin__form--control">
          <label htmlFor="loginEmail">Email</label>
          <input type="email" className="sign__control" placeholder="sample@domain.com" required id="loginEmail" value={loginEmail}
            onChange={e => setLoginEmail(e.target.value)} />
        </div>
        <div className="signin__form--control">
          <label htmlFor="loginPass">Password</label>
          <input type="password" className="sign__control" placeholder="******" required minLength="6" id="loginPass" value={loginPassword}
            onChange={e => setLoginPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn--round btn--orange">Login</button>
      </form>
    </>
  );
};

export default HomeView;
