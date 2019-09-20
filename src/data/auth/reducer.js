import { LOGIN } from './types';

const init = {
    user: JSON.parse(localStorage.getItem('user')),
    streamToken: localStorage.getItem('streamToken'),
    loading: false,
    error: false,
};

export default (state = init, action) => {
    switch (action.type) {
        case LOGIN.SUCCESS:
            return {
                ...state,
                user: action.user,
                streamToken: action.token,
            };
        default:
            return state;
    }
};
