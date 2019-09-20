import { all, takeEvery } from 'redux-saga/effects';

// Sagas //
import loginRequest from './loginRequest';

// Types //
import { LOGIN } from '../types';

export default function*() {
    yield all([takeEvery(LOGIN.REQUEST, loginRequest)]);
}
