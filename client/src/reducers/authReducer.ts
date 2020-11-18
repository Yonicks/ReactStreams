import { SIGN_OUT, UserActionTypes } from "../actions/types";
import { SIGN_IN } from './../actions/types';

const INITIAL_STATE = {
    isSignedIn: null,
    usedId: null,
};

const authReducer = (state = INITIAL_STATE, action: UserActionTypes) => {
    switch (action.type) {
        case SIGN_IN:
            return { ...state, isSignedIn: true, usedId: action.payload };
        case SIGN_OUT:
            return { ...state, isSignedIn: false, usedId: null };
        default:
            return state;
    }
};

export default authReducer;