import request from 'lib/request';
import history from 'lib/history';
import swal from 'sweetalert2';
import cookie from 'js-cookie';
export const REGISTER_REQUEST_ERROR = 'REGISTER_REQUEST_ERROR';
export const REGISTER_REQUEST_SUCCESS = 'REGISTER_REQUEST_SUCCESS';
export const REGISTER_FETCHING = 'REGISTER_FETCHING';
export const LOGIN_REQUEST_ERROR = 'LOGIN_REQUEST_ERROR';
export const LOGIN_REQUEST_SUCCESS = 'LOGIN_REQUEST_SUCCESS';
export const LOGIN_FETCHING = 'LOGIN_FETCHING';
//authen form
export const isRegisterFetching = () => {
  return {
    type: REGISTER_FETCHING
  };
}
export const doRegister = (email, password) => {
  return (dispatch, getState) => {
    dispatch(isRegisterFetching());
    request('auth/sign-up', 'POST', {
      body: JSON.stringify({
        email: email,
        password: password
      })
    }).then(function (response) {
      console.log(response)
      if (response) {
        dispatch(doRegisterSuccess(response))
      } else {
        dispatch(doRegisterError(response))
        swal({
          title: 'Error',
          html: '<p class="pop-content">Password and account not found, try again!</p>',
          animation: false,
          showCloseButton: true,
          confirmButtonText: 'Đóng',
          customClass: 'custom-modal animated zoomIn'
        })
      }
    })
  }
}
export const doRegisterSuccess = (response) => {
  return {
    type: REGISTER_REQUEST_SUCCESS,
    payload: response.payload
  };
}
export const doRegisterError = (response) => {
  return {
    type: REGISTER_REQUEST_ERROR,
    payload: response.payload
  };
}

export const isLoginFetching = () => {
  return {
    type: LOGIN_FETCHING
  };
}
export const doLogin = (email, password) => {
  return (dispatch, getState) => {
    dispatch(isLoginFetching());
    request('auth/sign-in', 'POST', {
      body: JSON.stringify({
        email: email,
        password: password
      })
    }).then(function (response) {
      if (response) {
        cookie.set('csrftoken', response.token);
        localStorage.setItem('users', JSON.stringify({ id: response.id, email: response.email }));
        dispatch(doLoginSuccess(response))
        history.push('/admin')
      } else {
        dispatch(doLoginError(response))
        swal({
          title: 'Error',
          html: '<p class="pop-content">Password and account not found, try again!</p>',
          animation: false,
          showCloseButton: true,
          confirmButtonText: 'Đóng',
          customClass: 'custom-modal animated zoomIn'
        })
      }
    })
  }
}
export const doLoginSuccess = (response) => {
  return {
    type: LOGIN_REQUEST_SUCCESS,
    payload: response
  };
}
export const doLoginError = (response) => {
  return {
    type: LOGIN_REQUEST_ERROR,
    payload: response.payload
  };
}
