import { SET_UNREAD_COUNT } from './types';

const init = {
    unread: 0,
};

export default (state = init, action) => {
    switch (action.type) {
        case SET_UNREAD_COUNT:
            return { ...state, unread: action.count };
        default:
            return state;
    }
};
