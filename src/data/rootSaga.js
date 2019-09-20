import { all, fork } from 'redux-saga/effects';

// Sagas //
import auth from 'data/auth/sagas';
import snackbar from 'containers/Snackbar/saga';

export default function*() {
    yield all([fork(auth), fork(snackbar)]);
}
