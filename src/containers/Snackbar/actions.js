import { QUEUE, ADD, DISMISS } from './types';

export function queueSnackbar(data, snackbarType = 'BasicSnackbar') {
    return {
        type: QUEUE,
        data,
        snackbarType,
    };
}

export function addSnackbar(data, snackbarType) {
    return {
        type: ADD,
        data,
        snackbarType,
    };
}

export function dismissSnackbar() {
    return {
        type: DISMISS,
    };
}
