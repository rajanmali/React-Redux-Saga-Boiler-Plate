import * as types from './constants';

export const initialState = {
  getUserListRequesting: false,
  getUserListResponse: [],
  getUserListError: '',
};

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_USER_LIST_REQUESTING:
      return { ...state, getUserListRequesting: true };
    case types.GET_USER_LIST_SUCCESS:
      return {
        ...state,
        getUserListRequesting: false,
        getUserListResponse: action.payload,
      };
    case types.GET_USER_LIST_FAILED:
      console.log(action);
      return {
        ...state,
        getUserListRequesting: false,
        getUserListError: action.message,
      };

    case types.CLEAR_MESSAGE:
      return {
        getUserListRequesting: false,
        getUserListResponse: [],
        getUserListError: '',
      };

    default:
      return state;
  }
}
