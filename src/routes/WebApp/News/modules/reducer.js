import {
  GET_BLOG_REQUEST_ERROR,
  GET_BLOG_REQUEST_SUCCESS,
  IS_FETCHING,
} from './actions';
const initialState = {
  loading: false,
  listBlog: []
};
export default function newsReducer(state = initialState, action) {
  switch (action.type) {
    case IS_FETCHING:
      return {
        ...state,
        loading: true
      };
      break;
    case GET_BLOG_REQUEST_SUCCESS:
      return {
        ...state,
        loading: true,
        listBlog: action.payload,
      };
      break;

    // DEFAULT
    default:
      return state;
  }
};
