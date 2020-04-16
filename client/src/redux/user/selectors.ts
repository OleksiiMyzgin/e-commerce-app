import { createSelector } from "reselect";
import { RootState } from "../../interfaces";

const selectUser = (state: RootState) => {
  return state.user;
};

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser,
);
