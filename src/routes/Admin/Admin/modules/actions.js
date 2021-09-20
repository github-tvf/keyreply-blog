import request from 'lib/request';

export const IS_FETCHING = 'IS_FETCHING';
export const GET_BLOG_REQUEST_SUCCESS = 'GET_BLOG_REQUEST_SUCCESS';
export const GET_BLOG_REQUEST_ERROR = 'GET_BLOG_REQUEST_ERROR';
export const DELETE_BLOG_REQUEST_SUCCESS = 'DELETE_BLOG_REQUEST_SUCCESS';
export const DELETE_BLOG_REQUEST_ERROR = 'DELETE_BLOG_REQUEST_ERROR';

//get all blog
export const isFetching = () => {
  return {
    type: IS_FETCHING
  };
}
export const getBlogByUID = (id) => {
  return (dispatch, getState) => {
    dispatch(isFetching());
    request('user/'+id+'/blogs/').then(function (response) {
      if (response) {
        dispatch(getBlogByUIDSuccess(response));
      } else {
        dispatch(getBlogByUIDError(response));
      }
    });
  };
}
export const getBlogByUIDSuccess = (response) => {
  return {
    type: GET_BLOG_REQUEST_SUCCESS,
    payload: response
  };
}
export const getBlogByUIDError = (response) => {
  return {
    type: GET_BLOG_REQUEST_ERROR,
    payload: response
  };
}
//delete blog
export const deleteBlog = (id) => {
  return (dispatch, getState) => {
    dispatch(isFetching());
    request('blog/'+id, 'DELETE', {
      body: JSON.stringify(),
    }).then(function (response) {
      if (response) {
        dispatch(deleteBlogSuccess(response))
        swal({
          title: 'Success',
          html: '<p class="pop-content">Delete blog success</p>',
          animation: false,
          showCloseButton: true,
          confirmButtonText: 'Đóng',
          customClass: 'custom-modal animated zoomIn'
        })
      } else {
        dispatch(deleteBlogError(response))
        swal({
          title: 'Error',
          html: '<p class="pop-content">Something error! Try again.</p>',
          animation: false,
          showCloseButton: true,
          confirmButtonText: 'Đóng',
          customClass: 'custom-modal animated zoomIn'
        })
      }
    })
  };
}
export const deleteBlogSuccess = (response) => {
  return {
    type: DELETE_BLOG_REQUEST_SUCCESS,
    payload: response
  };
}
export const deleteBlogError = (response) => {
  return {
    type: DELETE_BLOG_REQUEST_ERROR,
    payload: response
  };
}