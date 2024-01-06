import {
  createAction,
  createActionGroup,
  emptyProps,
  props,
} from "@ngrx/store";
import { IUserCredentials } from "src/app/shared/types/user/user";
import { IUserState } from "src/app/shared/types/user/userState";

export const beginLogin = "[Login] Begin Login";
const loginSuccess = "[Login] Login Success";
const logout = "[LOGOUT] Logout Success";

export const UserActions = createActionGroup({
  source: "user",
  events: {
    [loginSuccess]: props<{ loginState: Omit<IUserState, "isLogged"> }>(),
    [logout]: emptyProps(),
    [beginLogin]: props<{ usercred: IUserCredentials }>(),
  },
});
