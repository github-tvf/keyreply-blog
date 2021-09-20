import React, { useState } from 'react'
const RegisterForm = ({ parentCallback,callbackRegister  }) => {
  const [registerPassword, setRegisterPassword] = useState('')
  const [registerConfirmPass, setRegisterConfirmPass] = useState('')
  const [registerEmail, setRegisterEmail] = useState('')
  const confirmPassCheck = (e) => {
    if (registerPassword !== e.target.value) {
      e.target.setCustomValidity("passwords does not Match");
    } else {
      e.target.setCustomValidity("");
    }
    setRegisterConfirmPass(e.target.value)
  }
  const onSubmitForm = () => {
    callbackRegister(registerEmail,registerPassword);
    alert('Register Success')
    setRegisterPassword('');
    setRegisterConfirmPass('');
    setRegisterEmail('');
  }
  return (
    <>
      <form onSubmit={e => {
        e.preventDefault()
        onSubmitForm()
      }} id="registerForm">
        <div className="signin__form--control">
          <label htmlFor="">Email</label>
          <input type="email" className="sign__control" placeholder="sample@domain.com" required id="regsiterEmail" value={registerEmail}
            onChange={e => setRegisterEmail(e.target.value)}/>
        </div>
        <div className="signin__form--control">
          <label htmlFor="">Password</label>
          <input type="password" className="sign__control" placeholder="******" required minLength="6" value={registerPassword}
            onChange={e => setRegisterPassword(e.target.value)} id="regsiterPass" />
        </div>
        <div className="signin__form--control">
          <label htmlFor="">Confirm Password</label>
          <input type="password" className="sign__control" placeholder="******" onChange={e => confirmPassCheck(e)} required minLength="6" value={registerConfirmPass} id="regsiterConfirm" />
        </div>
        <button type="submit" className="btn btn--round btn--black">Create</button>
      </form>
    </>
  );
};

export default RegisterForm;
