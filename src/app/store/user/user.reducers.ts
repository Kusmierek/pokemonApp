import { Action, ActionReducer, createReducer, on } from "@ngrx/store";
import { UserState } from "src/app/shared/types/user/userState";
import { userActions } from "./user.actions";

const initialState: UserState = {
  name: "",
  role: null,
  token: "",
  isLogged: false,
};

export const userReducer: ActionReducer<UserState, Action> = createReducer(
  initialState,
  // eslint-disable-next-line @typescript-eslint/typedef
  on(
    userActions["[Login]LoginSuccess"],
    (state: UserState, { loginState }: {loginState: Omit<UserState, "isLogged">}) => ({
      ...state,
      ...loginState,
      isLogged: true,
    })
  ),
  on(userActions["[LOGOUT]LogoutSuccess"], () => ({
    name: "",
    role: null,
    token: "",
    isLogged: false,
  }))
);
