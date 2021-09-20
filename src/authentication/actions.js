import request from 'lib/request';

export const CURRENT_USER_REQUEST         = 'CURRENT_USER_REQUEST';
export const CURRENT_USER_REQUEST_ERROR   = 'CURRENT_USER_REQUEST_ERROR';
export const CURRENT_USER_REQUEST_SUCCESS = 'CURRENT_USER_REQUEST_SUCCESS';
export const CURRENT_USER_FETCHING        = 'CURRENT_USER_FETCHING';
export const LOGOUT_REQUEST_SUCCESS        = 'LOGOUT_REQUEST_SUCCESS';

// USER
export const isCurrentUserFetching = () => {
  return {
    type: CURRENT_USER_FETCHING
  };
}

export const getCurrentUser = () => {
  return (dispatch, getState) => {
    dispatch(getCurrentUserSuccess(JSON.parse(localStorage.getItem('users'))))
    // dispatch(isCurrentUserFetching());
    // request('blog/all?take=50&page=1').then(function(response) {
    //   if(response.status == 'successful') {
    //     dispatch(getCurrentUserSuccess(response));
    //   } else {
    //     dispatch(getCurrentUserError(response));
    //   }
    // });
  };
}

export const getCurrentUserSuccess = (response) => {
  return {
    type: CURRENT_USER_REQUEST_SUCCESS,
    payload: response
  };
}

export const getCurrentUserError = (response) => {
  return {
    type: CURRENT_USER_REQUEST_ERROR,
    payload: response.payload
  };
}

export const Logout = () => {
  return (dispatch, getState) => {
    dispatch(getlogoutSucces())
  };
}
export const getlogoutSucces = (response) => {
  console.log('logout sss')
  return {
    type: LOGOUT_REQUEST_SUCCESS,
    payload: response
  };
}