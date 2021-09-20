import {
  IS_FETCHING,
  GET_BLOG_REQUEST_SUCCESS,
} from './actions'
const initialState = {
  loading: false,
  listBlog:[],
}

export default function adminReducer(state = initialState, action) {
  switch (action.type) {
    case IS_FETCHING:
      return {
        ...state,
        loading: true
      }
      break;
    case GET_BLOG_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        listBlog: action.payload,
      }
      break;
    default:
      return state
  }
}
