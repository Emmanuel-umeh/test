
import axios from 'axios';
import { returnErrors } from './errorActions';


import {
  GET_USERS,
  USERS_LOADING,
  CAMPAIGNS_LOADED,
  CAMPAIGNS_LOADING
  // USERS_LOADED
} from './types';


export const getUsers = () => dispatch => {
    dispatch(setUsersLoading());
    axios
      .get('/api/users')
      .then(res =>
        dispatch({
          type: GET_USERS,
          payload: res.data
        })
      )
      // .then(
      //   dispatch(setUsersDoneLoading())
      // )
      
      .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
      );
  };
  
  export const setUsersLoading = () => {
    return {
      type: USERS_LOADING
    };
  };  

  

  export const setCampaignsLoading = () => {
    return {
      type: CAMPAIGNS_LOADING
    };
  };  

export const getCampaigns = () => dispatch => {
  dispatch(setCampaignsLoading());
  axios
    .get('/api/campaign/campaigns')
    .then(res =>
      dispatch({
        type: CAMPAIGNS_LOADED,
        payload: res.data
      })
    )
    // .then(
    //   dispatch(setUsersDoneLoading())
    // )
    
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};


  // export const setUsersDoneLoading = () => {
  //   return {
  //     type: USERS_LOADED
  //   };
  // }; 