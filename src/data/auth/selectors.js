import { createSelector } from 'reselect';

const getAuth = (state) => state.auth;

export const makeSelectCurrentUser = () =>
    createSelector(
        getAuth,
        ({ user }) => user,
    );

export const makeSelectStreamToken = () =>
    createSelector(
        getAuth,
        ({ streamToken }) => streamToken,
    );

export const makeSelectIsAuthed = () =>
    createSelector(
        makeSelectCurrentUser(),
        (user) => !!user,
    );
