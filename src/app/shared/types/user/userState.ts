import { TRole } from "../role";

export interface IUserState {
  name: string;
  token: string;
  role: TRole;
  isLogged: boolean;
}
