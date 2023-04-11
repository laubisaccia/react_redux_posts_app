import {
  FETCH_POSTS_ERROR,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  SEARCH_POST_ERROR,
  SEARCH_POST_REQUEST,
  SEARCH_POST_SUCCESS,
} from "./postActionTypes";
import axios from "axios";
const apiURL = "https://jsonplaceholder.typicode.com/posts";
//actions Creators
//1.fetch posts (request started,success,error)

//REQUEST STARTED
const fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST,
  };
};

//SUCCESS
const fetchPostsSuccess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
  };
};

//ERROR
const fetchPostsError = (error) => {
  return {
    type: FETCH_POSTS_ERROR,
    payload: error,
  };
};

//fetch posts action
export const fetchPostsAction = () => {
  return async (dispatch) => {
    //request action
    dispatch(fetchPostsRequest());
    try {
      //MAKE HTTP REQUEST
      const res = await axios.get(apiURL);

      //success action
      dispatch(fetchPostsSuccess(res.data));
    } catch (error) {
      //error action
      dispatch(fetchPostsError());
    }
  };
};

//2. fetch single post (request started,success,error)
//request action
const fetchPostRequest = () => {
  return {
    type: SEARCH_POST_REQUEST,
  };
};

const fetchPostSuccess = (post) => {
  return {
    type: SEARCH_POST_SUCCESS,
    payload: post,
  };
};

const fetchPostError = (error) => {
  return {
    type: SEARCH_POST_ERROR,
    payload: error,
  };
};
export const fetchPostAction = (id) => {
  return async (dispatch) => {
    dispatch(fetchPostRequest());
    try {
      //MAKE HTTP REQUEST
      const res = await axios.get(`${apiURL}/${id}`);
      //SUCCCCESS
      dispatch(fetchPostSuccess(res.data));
    } catch {
      dispatch(fetchPostError());
    }
  };
};
