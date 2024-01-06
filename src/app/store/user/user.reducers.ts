import { createReducer, on } from "@ngrx/store";
import { userState } from "./user.state";
import { UserActions } from "./user.actions";
import { IUserState } from "src/app/shared/types/user/userState";
const initialState: IUserState = {
  name: "",
  role: null,
  token: "",
  isLogged: false,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions["[Login]LoginSuccess"], (state, { loginState }) => ({
    ...state,
    ...loginState,
    isLogged: true,
  })),
  on(UserActions["[LOGOUT]LogoutSuccess"], () => ({
    name: "",
    role: null,
    token: "",
    isLogged: false,
  }))
);
