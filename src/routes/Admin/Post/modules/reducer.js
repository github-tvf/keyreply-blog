import {
  IS_FETCHING,
  GET_BLOG_DETAIL_REQUEST_SUCCESS,
} from './actions'
const initialState = {
  loading: false,
  postDetail:null,
}

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case IS_FETCHING:
      return {
        ...state,
        loading: true
      }
      break;
    case GET_BLOG_DETAIL_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        postDetail: action.payload,
      }
      break;
    default:
      return state
  }
}
