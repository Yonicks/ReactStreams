import { createSelector } from "reselect";

interface userState {
    user: any;
}

const selectUser = (state: userState) => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
);