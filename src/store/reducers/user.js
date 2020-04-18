import { ACTION_SET_USER_LIST } from '../typeForStore'

const initialState = {
    usersList: []
};



export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_SET_USER_LIST:
            return {
                ...state,
                usersList: action.payload
            };
        default:
            return state
    }
};
