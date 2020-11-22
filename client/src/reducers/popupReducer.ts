import { OPEN_POPUP, CLOSE_POPUP, PopupActionTypes } from '../actions/types';

const INITIAL_STATE = {
    isPopupShow: false,
};

const popupReducer = (state = INITIAL_STATE, action: PopupActionTypes) => {
    switch (action.type) {
        case OPEN_POPUP:
            return { ...state, isPopupShow: true }
        case CLOSE_POPUP:
            return { ...state, isPopupShow: false }
        default:
            return state;
    }
}

export default popupReducer;