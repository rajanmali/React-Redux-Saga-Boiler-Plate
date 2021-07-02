import * as type from './constants';

export function getUserList(users) {
  return {
    type: type.GET_USER_LIST_REQUESTING,
    payload: users,
  };
}
