import { Action } from 'redux';

export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";


interface SignInAction {
    type: typeof SIGN_IN;
    payload: string
}

interface SignOutAction {
    type: typeof SIGN_OUT;
    payload: string
}

export type UserActionTypes = SignInAction | SignOutAction;