import { actionChannel, delay, take, put } from 'redux-saga/effects';

// Types //
import { QUEUE } from './types';

// Actions //
import { addSnackbar, dismissSnackbar } from './actions';

// Sagas //

export default function*() {
    const snackChannel = yield actionChannel(QUEUE);
    while (true) {
        const { data, snackbarType } = yield take(snackChannel);

        yield put(addSnackbar(data, snackbarType));

        yield delay(4000);
        yield put(dismissSnackbar());
        yield delay(500);
    }
}
