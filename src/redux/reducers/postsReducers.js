import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  FETCH_POSTS_REQUEST,
  SEARCH_POST_ERROR,
  SEARCH_POST_REQUEST,
  SEARCH_POST_SUCCESS,
} from "../actions/postActionTypes";

//initial state

const initialState = {
  loading: false,
  error: "",
  posts: [],
  post: {},
};

//reducers
export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return { ...state, loading: true };
    //success
    case FETCH_POSTS_SUCCESS:
      return { ...state, posts: action.payload, loading: false };
    //error
    case FETCH_POSTS_ERROR:
      return { ...state, posts: [], error: action.error, loading: false };

    //FETCH SINGLE POST
    case SEARCH_POST_REQUEST:
      return { ...state, loading: true };
    //success
    case SEARCH_POST_SUCCESS:
      return { ...state, posts: [action.payload], loading: false };
    case SEARCH_POST_ERROR:
      return {
        ...state,
        posts: [],
        error: action.error,
        loading: false,
      };
    //return default state
    default:
      return state;
  }
};
//store
