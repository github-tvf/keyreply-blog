import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getCurrentUser,Logout } from 'authentication/actions';
import Header from '../Header';
import Footer from '../Footer';

const PageLayout = ({currentUser, location, children, check, getCurrentUser}) => {
  useEffect(() => {
    getCurrentUser();
  }, []);
  return (
    <>
      <Header currentUser={currentUser}/>
      <main id="main" className={`page-${location.pathname !== '/' ? location.pathname.replace('/', '') : 'home'}`}>
        <>
          {children}
        </>
      </main>
      <Footer/>
    </>
  );
};

const mapDispatchToProps = {
  getCurrentUser,
  Logout
};

const mapStateToProps = (state) => ({
  currentUser: state.currentUser
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PageLayout));
