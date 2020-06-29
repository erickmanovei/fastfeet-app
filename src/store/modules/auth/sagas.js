import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '~/services/api';
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { deliveryman_id } = payload;

    const { data } = yield call(api.get, `/deliverymans/${deliveryman_id}`);

    yield put(signInSuccess(data));

    // history.push('/delivery');
  } catch (err) {
    Alert.alert('Falha na autenticação', 'ID inexistente!');
    yield put(signFailure());
  }
}

// export function signOut() {
//   // history.push('/');
// }

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  // takeLatest('@auth/SIGN_OUT', signOut),
]);
