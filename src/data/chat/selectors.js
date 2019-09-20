import { createSelector } from 'reselect';

const getChat = (state) => state.chat;

export const makeSelectUnreadCount = () =>
    createSelector(
        getChat,
        (chat) => chat.unread,
    );
