import request from 'lib/request';
export const GET_BLOG_REQUEST_ERROR = 'GET_BLOG_REQUEST_ERROR';
export const GET_BLOG_REQUEST_SUCCESS = 'GET_BLOG_REQUEST_SUCCESS';
export const IS_FETCHING = 'IS_FETCHING';

// USER
export const isFetching = () => {
  return {
    type: IS_FETCHING
  };
}

export const getAllBlogs = (pageSize, pageNum) => {
  return (dispatch, getState) => {
    dispatch(isFetching());
    request('blog/all?take=' + pageSize + '&page=' + pageNum).then(function (response) {
      if (response) {
        dispatch(getAllBlogsSuccess(response));
      } else {
        dispatch(getAllBlogsError(response));
      }
    });
  };
}

export const getAllBlogsSuccess = (response) => {
  return {
    type: GET_BLOG_REQUEST_SUCCESS,
    payload: response
  };
}

export const getAllBlogsError = (response) => {
  return {
    type: GET_BLOG_REQUEST_ERROR,
    payload: response
  };
}
