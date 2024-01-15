/* eslint-disable @typescript-eslint/typedef */
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "src/app/shared/types/user/userState";

export const selectFeature = createFeatureSelector<UserState>("user");

export const selectUser = createSelector(selectFeature, (state) => state);
export const selectIsAdmin = createSelector(
  selectFeature,
  (state) => state.role == "Admin"
);
export const selectIsLogged = createSelector(
  selectFeature,
  (state) => state.isLogged
);

export const selectToken = createSelector(
  selectFeature,
  (state) => state.token
);

export const selectName = createSelector(selectFeature, (state) => state.name);
