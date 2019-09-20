import { createSelector } from 'reselect';

const getParticipants = (state) => state.voxeet.participants;

export const makeSelectShowModal = () =>
    createSelector(
        getParticipants,
        (participants) => !participants.participants.length,
    );
