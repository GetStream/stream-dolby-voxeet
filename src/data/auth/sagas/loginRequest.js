import { all, call, put } from 'redux-saga/effects';
import shortid from 'shortid';

// Utils //
import history from 'utils/history';
import fetch from 'utils/fetch';

// Types //
import { LOGIN } from '../types';

export default function*({ conferenceAlias, data: { username } }) {
    try {
        username = username.toLowerCase().replace(/\s/g, '_');

        const {
            data: { token, user },
        } = yield call(fetch, 'post', '/token', {
            username,
        });

        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('streamToken', token);

        if (!conferenceAlias) {
            conferenceAlias = shortid();
        }

        yield all([
            put({
                type: LOGIN.SUCCESS,
                user,
                token,
            }),
            call(history.push, `/${conferenceAlias}`),
        ]);
    } catch (error) {
        yield put({
            type: LOGIN.ERROR,
            error,
        });
    }
}
