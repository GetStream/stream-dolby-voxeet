import { createSelector } from 'reselect';

const getSnackbar = (state) => state.snackbar;

export const makeSelectSnackbarData = () =>
    createSelector(
        getSnackbar,
        (snackbar) => snackbar.data,
    );

export const makeSelectShowSnackbar = () =>
    createSelector(
        getSnackbar,
        (snackbar) => snackbar.show,
    );

export const makeSelectSnackbarType = () =>
    createSelector(
        getSnackbar,
        (snackbar) => snackbar.type,
    );
