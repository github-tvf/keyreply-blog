import request from 'lib/request';
import history from 'lib/history';
import swal from 'sweetalert2';
import cookie from 'js-cookie';
export const GET_BLOG_DETAIL_REQUEST_ERROR = 'GET_BLOG_DETAIL_REQUEST_ERROR';
export const GET_BLOG_DETAIL_REQUEST_SUCCESS = 'GET_BLOG_DETAIL_REQUEST_SUCCESS';
export const EDIT_POST_REQUEST_SUCCESS = 'EDIT_POST_REQUEST_SUCCESS';
export const EDIT_POST_REQUEST_ERROR = 'EDIT_POST_REQUEST_ERROR';
export const POST_REQUEST_SUCCESS = 'POST_REQUEST_SUCCESS';
export const POST_REQUEST_ERROR = 'POST_REQUEST_ERROR';
export const IS_FETCHING = 'IS_FETCHING';


export const isFetching = () => {
  return {
    type: IS_FETCHING
  };
}
export const doPost = (title, content,category,thumbnail ) => {
  return (dispatch, getState) => {
    dispatch(isFetching());
    request('blog', 'POST', {
      body: JSON.stringify({
        title: title,
        content: content,
        category:category,
        thumbnail:thumbnail,
      })
    }).then(function (response) {
      if (response) {
        dispatch(doPostSuccess(response))
        swal({
          title: 'Success',
          html: '<p class="pop-content">Create post successful!</p>',
          animation: false,
          showCloseButton: true,
          confirmButtonText: 'Đóng',
          customClass: 'custom-modal animated zoomIn'
        })
        history.push('/admin')
      } else {
        dispatch(doPostError(response))
        swal({
          title: 'Error',
          html: '<p class="pop-content">Invalid data! Try again</p>',
          animation: false,
          showCloseButton: true,
          confirmButtonText: 'Đóng',
          customClass: 'custom-modal animated zoomIn'
        })
      }
    })
  }
}
export const doPostSuccess = (response) => {
  return {
    type: POST_REQUEST_SUCCESS,
    payload: response.payload
  };
}
export const doPostError = (response) => {
  return {
    type: POST_REQUEST_ERROR,
    payload: response.payload
  };
}
//get post by id
export const getBlogByID = (id,callback) => {
  return (dispatch, getState) => {
    dispatch(isFetching());
    request('blog/'+id).then(function (response) {
      if (response) {
        dispatch(getBlogByIDSuccess(response));
        callback(response)
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
//edit post
export const editPost = (id,title, content,category,thumbnail ) => {
  return (dispatch, getState) => {
    dispatch(isFetching());
    request('blog/'+id, 'PATCH', {
      body: JSON.stringify({
        title: title,
        content: content,
        category:category,
        thumbnail:thumbnail,
      })
    }).then(function (response) {
      if (response) {
        dispatch(editPostSuccess(response))
        swal({
          title: 'Success',
          html: '<p class="pop-content">Create post successful!</p>',
          animation: false,
          showCloseButton: true,
          confirmButtonText: 'Đóng',
          customClass: 'custom-modal animated zoomIn'
        })
        history.push('/admin')
      } else {
        dispatch(editPostError(response))
        swal({
          title: 'Error',
          html: '<p class="pop-content">Invalid data! Try again</p>',
          animation: false,
          showCloseButton: true,
          confirmButtonText: 'Đóng',
          customClass: 'custom-modal animated zoomIn'
        })
      }
    })
  }
}
export const editPostSuccess = (response) => {
  return {
    type: EDIT_POST_REQUEST_SUCCESS,
    payload: response.payload
  };
}
export const editPostError = (response) => {
  return {
    type: EDIT_POST_REQUEST_ERROR,
    payload: response.payload
  };
}