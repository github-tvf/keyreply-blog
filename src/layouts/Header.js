import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import history from 'lib/history';
import cookie from 'js-cookie';
const Header = (currentUser) => {
  const handleLogout = () => {
    cookie.set('csrftoken', '');
    localStorage.removeItem('users');
    history.push('/login')
  };
  const handleRedirect = (link) => {
    history.push(link)
    setMenu(false)
  }
  const [showMenu, setMenu] = useState(false)
  return (
    <header data-html2canvas-ignore>
      <div className={`menu-container ${showMenu ? 'is-active' : ''}`}>
        <NavLink to={'/'} className="logo">
          <img src="/images/tvf_logo.png" alt="" />
        </NavLink>
        <a href="#" className="hamburger-menu" onClick={e => { e.preventDefault(), setMenu(!showMenu)}}>
          <span className="bar"></span>
        </a>
        <div className="botHd">
          <a className="btnSearch" href="/tim-kiem"></a>
          <p>
            <span>EN</span><em>|</em><a href="#" className="prevent-click">VN</a>
          </p>
        </div>
      </div>
      <div className={`active-menu ${showMenu ? 'is-active' : ''}`}>
        <ul>
          <li className="animate__animated animate__fadeInLeft">
            <a href="#" onClick={e => { e.preventDefault(), handleRedirect('/') }}>home</a>
          </li>
          <li className="animate__animated animate__fadeInLeft">
            <a href="#" onClick={e => { e.preventDefault(), handleRedirect('/news') }}>News</a>
          </li>
          <li className="animate__animated animate__fadeInLeft">
            <a href="#" onClick={e => { e.preventDefault(), handleRedirect('/admin') }}>admin</a>
          </li>
          {
            currentUser.currentUser.user ? (
              <li className="animate__animated animate__fadeInLeft">
                <a href="#" onClick={e => { e.preventDefault(), handleLogout() }}>hi,{currentUser.currentUser.user.email} |&nbsp; &nbsp; &nbsp; Logout</a>
              </li>
            ) : (
              <li className="animate__animated animate__fadeInLeft"><a href="#" onClick={e => { e.preventDefault(), handleRedirect('/login') }}>Login</a></li>
            )
          }
        </ul>
      </div>
    </header>
  );
};

export default Header;
