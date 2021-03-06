import { Action } from 'redux';

export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
export const CREATE_STREAM = "CREATE_STREAM";
export const FETCH_STREAMS = "FETCH_STREAMS";
export const FETCH_STREAM = "FETCH_STREAM";
export const DELETE_STREAM = "DELETE_STREAM";
export const EDIT_STREAM = "EDIT_STREAM";
export const OPEN_POPUP = "OPEN_POPUP";
export const CLOSE_POPUP = "CLOSE_POPUP";


interface SignInAction {
    type: typeof SIGN_IN;
    payload: string
}

interface SignOutAction {
    type: typeof SIGN_OUT;
    payload: string
}

interface CreateStreamAction {
    type: typeof CREATE_STREAM;
    payload: any
}

interface FetchStreamsAction {
    type: typeof FETCH_STREAMS,
    payload: any
}

interface FetchStreamAction {
    type: typeof FETCH_STREAM;
    payload: any
}

interface DeleteStreamAction {
    type: typeof DELETE_STREAM;
    payload: any
}

interface EditStreamAction {
    type: typeof EDIT_STREAM;
    payload: any
}


interface OpenPopupAction {
    type: typeof OPEN_POPUP;
    payload: boolean
}

interface ClosePopupAction {
    type: typeof CLOSE_POPUP;
    payload: boolean
}

export type UserActionTypes = SignInAction | SignOutAction;
export type StreamActionTypes = CreateStreamAction | FetchStreamsAction | FetchStreamAction | DeleteStreamAction | EditStreamAction;
export type PopupActionTypes = OpenPopupAction | ClosePopupAction;
