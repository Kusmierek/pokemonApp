/* eslint-disable @typescript-eslint/typedef */
import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { UserCredentials } from "src/app/shared/types/user/user";
import { UserState } from "src/app/shared/types/user/userState";

export const beginLogin: string = "[Login] Begin Login";

export const userActions = createActionGroup({
  source: "user",
  events: {
    "[Login] Login Success": props<{
      loginState: Omit<UserState, "isLogged">;
    }>(),
    "[LOGOUT] Logout Success": emptyProps(),
    "[Login] Begin Login": props<{ usercred: UserCredentials }>(),
  },
});
