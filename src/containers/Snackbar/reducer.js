// Types //
import { ADD, DISMISS } from './types';

const init = {
    show: false,
    data: {},
    type: 'BasicSnackbar',
};

export default (state = init, action) => {
    switch (action.type) {
        case ADD:
            return { ...state, data: action.data, type: action.snackbarType, show: true };
        case DISMISS:
            return { ...state, show: false };

        default:
            return state;
    }
};
