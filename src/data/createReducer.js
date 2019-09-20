import { combineReducers } from 'redux';
import { reducer as voxeet } from '@voxeet/react-components';
import auth from 'data/auth/reducer';
import chat from 'data/chat/reducer';
import snackbar from 'containers/Snackbar/reducer';

export default (injectedReducers) =>
    combineReducers({
        auth,
        chat,
        snackbar,
        voxeet,
        ...injectedReducers,
    });
