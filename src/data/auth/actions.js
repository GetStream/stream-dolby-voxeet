import { LOGIN } from './types';

export const loginRequest = (data, conferenceAlias) => ({
    type: LOGIN.REQUEST,
    conferenceAlias,
    data,
});
