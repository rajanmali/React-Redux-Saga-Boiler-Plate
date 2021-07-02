import { getAPI } from '../../utils/apiHelper';
import { call, put, takeEvery } from 'redux-saga/effects';

function* getUserListService() {
  try {
    const data = yield call(getAPI);
    yield put({ type: 'GET_USER_LIST_SUCCESS', payload: data });
  } catch (e) {
    yield put({ type: 'GET_USER_LIST_FAILED', message: e.message });
  }
}

function* homeSaga() {
  yield takeEvery('GET_USER_LIST_REQUESTING', getUserListService);
}

export default homeSaga;
