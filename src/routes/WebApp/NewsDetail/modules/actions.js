import request from 'lib/request';
export const IS_FETCHING = 'IS_FETCHING';
export const GET_BLOG_DETAIL_REQUEST_ERROR = 'GET_BLOG_DETAIL_REQUEST_ERROR';
export const GET_BLOG_DETAIL_REQUEST_SUCCESS = 'GET_BLOG_DETAIL_REQUEST_SUCCESS';
export const GET_BLOG_REQUEST_SUCCESS = 'GET_BLOG_REQUEST_SUCCESS';
export const GET_BLOG_REQUEST_ERROR = 'GET_BLOG_REQUEST_ERROR';
export const isFetching = () => {
  return {
    type: IS_FETCHING
  };
}
export const getBlogByID = (id) => {
  return (dispatch, getState) => {
    dispatch(isFetching());
    request('blog/'+id).then(function (response) {
      if (response) {
        dispatch(getBlogByIDSuccess(response));
      } else {
        dispatch(getBlogByIDError(response));
      }
    });
  };
}
export const getBlogByIDSuccess = (response) => {
  return {
    type: GET_BLOG_DETAIL_REQUEST_SUCCESS,
    payload: response
  };
}
export const getBlogByIDError = (response) => {
  return {
    type: GET_BLOG_DETAIL_REQUEST_ERROR,
    payload: response
  };
}
//get realated news
export const getRelatedNews = (pageSize, pageNum) => {
  return (dispatch, getState) => {
    dispatch(isFetching());
    request('blog/all?take=' + pageSize + '&page=' + pageNum).then(function (response) {
      if (response) {
        dispatch(getRelatedNewsSuccess(response));
      } else {
        dispatch(getRelatedNewsError(response));
      }
    });
  };
}

export const getRelatedNewsSuccess = (response) => {
  return {
    type: GET_BLOG_REQUEST_SUCCESS,
    payload: response
  };
}

export const getRelatedNewsError = (response) => {
  return {
    type: GET_BLOG_REQUEST_ERROR,
    payload: response
  };
}
