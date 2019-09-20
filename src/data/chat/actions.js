import { TOGGLE_ATTENDEES_CHAT, SET_UNREAD_COUNT } from './types';

export const toggleAttendeesChat = () => ({
    type: TOGGLE_ATTENDEES_CHAT,
});

export const setUnreadCount = (count) => ({
    type: SET_UNREAD_COUNT,
    count,
});
