import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IUserState } from "src/app/shared/types/user/userState";

export const selectFeature = createFeatureSelector<IUserState>("user");

export const selectUser = createSelector(selectFeature, (state) => state);
export const selectRole = createSelector(selectFeature, (state) => state.role);
export const selectIsLogged = createSelector(
  selectFeature,
  (state) => state.isLogged
);
