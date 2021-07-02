import { all } from 'redux-saga/effects';
import homeSaga from '../containers/Home/saga';

export default function* rootSaga() {
  yield all([homeSaga()]);
}
