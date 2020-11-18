
import { SIGN_IN, SIGN_OUT } from './types';
export const signIn = (usedId: string) => {
    return {
        type: SIGN_IN,
        payload: usedId
    }
}
export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}